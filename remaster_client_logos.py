from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parent
CLIENTS = ROOT / "assets" / "clients"


def connected_mask(mask: np.ndarray, minimum: int = 8) -> np.ndarray:
    """Remove isolated source-background noise without changing logo geometry."""
    height, width = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    keep = np.zeros_like(mask, dtype=bool)
    for y in range(height):
        for x in range(width):
            if not mask[y, x] or seen[y, x]:
                continue
            queue = deque([(y, x)])
            seen[y, x] = True
            component = []
            while queue:
                cy, cx = queue.popleft()
                component.append((cy, cx))
                for ny, nx in ((cy - 1, cx), (cy + 1, cx), (cy, cx - 1), (cy, cx + 1)):
                    if 0 <= ny < height and 0 <= nx < width and mask[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        queue.append((ny, nx))
            if len(component) >= minimum:
                for cy, cx in component:
                    keep[cy, cx] = True
    return keep


def trim_and_save(rgba: np.ndarray, name: str, width: int = 1200, padding: int = 22) -> None:
    image = Image.fromarray(rgba.astype(np.uint8), "RGBA")
    bbox = image.getchannel("A").getbbox()
    if not bbox:
        raise RuntimeError(f"No alpha content found for {name}")
    left = max(0, bbox[0] - padding)
    top = max(0, bbox[1] - padding)
    right = min(image.width, bbox[2] + padding)
    bottom = min(image.height, bbox[3] + padding)
    image = image.crop((left, top, right, bottom))
    ratio = width / image.width
    image = image.resize((width, round(image.height * ratio)), Image.Resampling.LANCZOS)
    image.save(CLIENTS / name, optimize=True)


def unblend(rgb: np.ndarray, alpha: np.ndarray, background: tuple[int, int, int]) -> np.ndarray:
    a = np.maximum(alpha[..., None] / 255.0, 0.035)
    bg = np.array(background, dtype=np.float32)
    return np.clip((rgb.astype(np.float32) - bg * (1.0 - a)) / a, 0, 255)


def remaster_dermalysse() -> None:
    rgb = np.array(Image.open(CLIENTS / "dermalysse.webp").convert("RGB"))
    distance = 255 - rgb.min(axis=2)
    alpha = np.clip((distance.astype(np.float32) - 2) / 138 * 255, 0, 255)
    alpha[distance < 5] = 0
    keep = connected_mask(alpha > 9, 5)
    alpha *= keep
    alpha_image = Image.fromarray(alpha.astype(np.uint8)).filter(ImageFilter.GaussianBlur(.25))
    alpha = np.array(alpha_image)
    # Rebuild the two original blue-grey inks as clean flat brand colours;
    # this removes WebP chroma noise around the small source lettering.
    clean = np.empty_like(rgb)
    light_ink = rgb[..., 0] > 82
    clean[:] = (49, 87, 113)
    clean[light_ink] = (132, 154, 168)
    rgba = np.dstack((clean, alpha))
    trim_and_save(rgba, "dermalysse.png")


def remaster_imdiil() -> None:
    rgb = np.array(Image.open(CLIENTS / "imdiil.webp").convert("RGB"))
    red, green, blue = [rgb[..., index].astype(np.float32) for index in range(3)]
    light = np.clip((rgb.min(axis=2).astype(np.float32) - 73) * 2.25, 0, 255)
    orange = np.clip((red - blue - 25) * 3.0, 0, 255) * (red > green * 1.25)
    alpha = np.maximum(light, orange)
    keep = connected_mask(alpha > 14, 7)
    alpha *= keep
    alpha = np.array(Image.fromarray(alpha.astype(np.uint8)).filter(ImageFilter.GaussianBlur(.3)))
    clean = np.empty_like(rgb)
    clean[:] = (250, 251, 249)
    clean[orange > light] = (226, 83, 33)
    rgba = np.dstack((clean, alpha))
    trim_and_save(rgba, "imdiil.png")


def remaster_zoorigen() -> None:
    source = Image.open(CLIENTS / "zoorigen.webp").convert("RGB").crop((48, 112, 462, 372))
    rgb = np.array(source)
    red, green, blue = [rgb[..., index].astype(np.float32) for index in range(3)]
    yy, xx = np.indices(red.shape)

    giraffe_zone = (xx < 180) & (yy < 224)
    blue_zone = (xx > 130) & (yy > 50) & (yy < 164)
    green_zone = (xx > 132) & (yy > 112) & (yy < 238)

    orange = np.clip((red - green - 18) * 3.2, 0, 255) * giraffe_zone * (red > 86)
    cyan = np.clip((blue - green - 7) * 5.0 + (blue - red - 38) * 1.7, 0, 255) * blue_zone
    leaf = np.clip((green - blue - 33) * 3.0 + (green - red - 5) * 1.4, 0, 255) * green_zone * (red > 55)
    cream = np.clip((red - 118) * 2.4, 0, 255) * giraffe_zone * (green > 92) * (blue < 120)
    scores = np.stack((orange, cyan, leaf, cream), axis=2)
    alpha = scores.max(axis=2)
    keep = connected_mask(alpha > 18, 80)
    alpha = np.where(keep, np.maximum(alpha, 220), 0)
    alpha[yy > 224] = 0
    alpha[(yy > 210) & (xx > 296)] = 0

    dominant = scores.argmax(axis=2)
    clean = np.zeros_like(rgb)
    palette = np.array(((166, 71, 27), (0, 118, 176), (105, 143, 17), (236, 191, 130)), dtype=np.uint8)
    clean[:] = palette[dominant]
    alpha = np.array(Image.fromarray(alpha.astype(np.uint8)).filter(ImageFilter.GaussianBlur(.32)))
    rgba = np.dstack((clean, alpha))
    trim_and_save(rgba, "zoorigen.png", padding=16)


def remaster_industry() -> None:
    source = Image.open(CLIENTS / "cliente-industria.webp").convert("RGB").crop((124, 108, 365, 370))
    rgb = np.array(source)
    red, green, blue = [rgb[..., index].astype(np.float32) for index in range(3)]
    yy, xx = np.indices(red.shape)

    light = np.clip((rgb.min(axis=2).astype(np.float32) - 105) * 2.1, 0, 255)
    dark = np.clip((94 - rgb.max(axis=2).astype(np.float32)) * 3.2, 0, 255)
    gear_zone = (xx < 142) & (yy > 54) & (yy < 186)
    # The blue source background is too close to the small gear outline to
    # separate faithfully. Preserve the recognisable white/black master mark
    # instead of introducing a coloured halo around it.
    accent = np.zeros_like(red)
    scores = np.stack((light, dark, accent), axis=2)
    alpha = scores.max(axis=2)
    keep = connected_mask(alpha > 20, 10)
    alpha *= keep

    dominant = scores.argmax(axis=2)
    clean = np.zeros_like(rgb)
    palette = np.array(((250, 250, 247), (15, 17, 20), (12, 112, 184)), dtype=np.uint8)
    clean[:] = palette[dominant]
    alpha = np.array(Image.fromarray(alpha.astype(np.uint8)).filter(ImageFilter.GaussianBlur(.32)))
    rgba = np.dstack((clean, alpha))
    trim_and_save(rgba, "cliente-industria.png", padding=18)


if __name__ == "__main__":
    remaster_dermalysse()
    remaster_imdiil()
    remaster_zoorigen()
    remaster_industry()
    for filename in ("dermalysse.png", "imdiil.png", "zoorigen.png", "cliente-industria.png"):
        path = CLIENTS / filename
        print(path, path.stat().st_size)
