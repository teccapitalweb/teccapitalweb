from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets" / "img"
SOURCE = ASSETS / "logo-t.png"
LOGO_OUT = ASSETS / "logo-t-hd.png"
LOGO_WHITE_OUT = ASSETS / "logo-t-white.png"
POSTER_OUT = ASSETS / "brand-editorial-white.png"


def vertical_gradient(size: tuple[int, int], top: tuple[int, ...], bottom: tuple[int, ...]) -> Image.Image:
    layer = Image.new("RGBA", size)
    pixels = layer.load()
    for y in range(size[1]):
        ratio = y / max(1, size[1] - 1)
        color = tuple(round(a + (b - a) * ratio) for a, b in zip(top, bottom))
        for x in range(size[0]):
            pixels[x, y] = color
    return layer


def extract_logo() -> Image.Image:
    """Rebuild the supplied stylized T as a crisp, scalable transparent mark."""
    canvas = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))

    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rectangle((296, 322, 518, 388), fill=(8, 12, 17, 95))
    shadow_draw.rectangle((452, 322, 518, 864), fill=(8, 12, 17, 95))
    shadow_draw.polygon(((574, 178), (814, 178), (748, 314), (574, 314)), fill=(8, 12, 17, 72))
    shadow = shadow.filter(ImageFilter.GaussianBlur(15))
    canvas.alpha_composite(shadow, (12, 18))

    black_mask = Image.new("L", canvas.size, 0)
    black_draw = ImageDraw.Draw(black_mask)
    black_draw.rectangle((286, 304, 508, 370), fill=255)
    black_draw.rectangle((442, 304, 508, 846), fill=255)
    black_layer = vertical_gradient(canvas.size, (29, 34, 40, 255), (8, 12, 17, 255))
    black_layer.putalpha(black_mask)
    canvas.alpha_composite(black_layer)

    blue_mask = Image.new("L", canvas.size, 0)
    blue_draw = ImageDraw.Draw(blue_mask)
    blue_draw.polygon(((560, 160), (818, 160), (748, 300), (560, 300)), fill=255)
    blue_layer = vertical_gradient(canvas.size, (41, 112, 214, 255), (18, 76, 173, 255))
    blue_layer.putalpha(blue_mask)
    canvas.alpha_composite(blue_layer)

    highlight = ImageDraw.Draw(canvas)
    highlight.line((568, 170, 802, 170), fill=(126, 177, 242, 160), width=4)
    highlight.line((296, 314, 498, 314), fill=(81, 89, 99, 135), width=3)

    bbox = canvas.getchannel("A").getbbox()
    if not bbox:
        raise RuntimeError("No se pudo construir el símbolo.")
    padding = 34
    crop_box = (
        max(0, bbox[0] - padding),
        max(0, bbox[1] - padding),
        min(canvas.width, bbox[2] + padding),
        min(canvas.height, bbox[3] + padding),
    )
    cropped = canvas.crop(crop_box)
    cropped.save(LOGO_OUT, optimize=True)
    white = Image.new("RGBA", cropped.size, (255, 255, 255, 0))
    white.putalpha(cropped.getchannel("A"))
    white.save(LOGO_WHITE_OUT, optimize=True)
    return cropped


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / path), size=size)


def create_poster(logo: Image.Image) -> None:
    width, height = 1734, 907
    paper = (242, 239, 232, 255)
    poster = Image.new("RGBA", (width, height), paper)
    draw = ImageDraw.Draw(poster)

    # Restrained editorial grid and a solid cobalt field for the white mark.
    line = (18, 20, 22, 22)
    panel_x = 990
    for x in range(84, panel_x, 148):
        draw.line((x, 0, x, height), fill=line, width=1)
    for y in range(72, height, 148):
        draw.line((0, y, panel_x, y), fill=line, width=1)

    ink = (18, 20, 22, 255)
    blue = (21, 88, 232, 255)
    muted = (105, 108, 106, 255)
    draw.rectangle((panel_x, 0, width, height), fill=blue)
    draw.text((92, 72), "TEC CAPITAL / 2026", font=font("consola.ttf", 22), fill=muted)
    draw.text((92, 326), "TEC CAPITAL", font=font("segoeuib.ttf", 91), fill=ink)
    draw.text((98, 442), "Diseñamos lo que sigue.", font=font("segoeui.ttf", 44), fill=ink)
    draw.rectangle((96, 536, 148, 543), fill=blue)
    draw.text(
        (96, 583),
        "ESTRATEGIA · SOFTWARE · INTELIGENCIA ARTIFICIAL",
        font=font("consola.ttf", 19),
        fill=muted,
    )

    mark = Image.open(LOGO_WHITE_OUT).convert("RGBA")
    mark.thumbnail((470, 610), Image.Resampling.LANCZOS)
    poster.alpha_composite(mark, (panel_x + (width - panel_x - mark.width) // 2, 145))
    poster.convert("RGB").save(POSTER_OUT, quality=94, optimize=True)


if __name__ == "__main__":
    high_resolution_logo = extract_logo()
    create_poster(high_resolution_logo)
    print(LOGO_OUT)
    print(LOGO_WHITE_OUT)
    print(POSTER_OUT)
