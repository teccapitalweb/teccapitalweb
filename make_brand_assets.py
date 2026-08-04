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
    """Rebuild the supplied dimensional T as a crisp transparent mark."""
    canvas = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))

    # The reference is a real T: a white frontal face, extruded to the left
    # and bottom, plus a separate trapezoidal counter-shape on the upper right.
    # Blue in the supplied render is intentionally replaced by TEC black.
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.polygon(((225, 196), (599, 196), (599, 850), (414, 850),
                         (414, 345), (225, 345)), fill=(0, 0, 0, 150))
    shadow_draw.polygon(((620, 196), (856, 196), (750, 372), (620, 372)),
                        fill=(0, 0, 0, 135))
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    canvas.alpha_composite(shadow, (18, 30))

    draw = ImageDraw.Draw(canvas)

    # Black depth of the T. The facets make the extrusion legible even at
    # navigation-logo size without making the mark feel glossy or artificial.
    draw.polygon(((246, 155), (218, 191), (218, 356), (246, 320)),
                 fill=(10, 12, 15, 255))
    draw.polygon(((218, 356), (378, 356), (406, 320), (246, 320)),
                 fill=(20, 23, 28, 255))
    draw.polygon(((378, 356), (406, 320), (406, 824), (378, 854)),
                 fill=(8, 10, 13, 255))
    draw.polygon(((378, 854), (565, 854), (592, 824), (406, 824)),
                 fill=(18, 21, 25, 255))

    # Fully opaque white frontal face, following the exact T silhouette.
    face_mask = Image.new("L", canvas.size, 0)
    face_draw = ImageDraw.Draw(face_mask)
    face_draw.polygon(((246, 155), (592, 155), (592, 824), (406, 824),
                       (406, 320), (246, 320)), fill=255)
    face = vertical_gradient(canvas.size, (255, 255, 255, 255), (246, 246, 244, 255))
    face.putalpha(face_mask)
    canvas.alpha_composite(face)
    draw = ImageDraw.Draw(canvas)
    draw.line(((246, 155), (592, 155), (592, 824), (406, 824)),
              fill=(221, 222, 220, 210), width=2)

    # Separate upper-right counter-shape, now black instead of blue.
    draw.polygon(((630, 155), (608, 190), (608, 362), (630, 332)),
                 fill=(5, 7, 10, 255))
    draw.polygon(((608, 362), (716, 362), (746, 332), (630, 332)),
                 fill=(12, 14, 18, 255))
    cap_mask = Image.new("L", canvas.size, 0)
    cap_draw = ImageDraw.Draw(cap_mask)
    cap_draw.polygon(((630, 155), (856, 155), (746, 332), (630, 332)), fill=255)
    cap = vertical_gradient(canvas.size, (31, 34, 39, 255), (10, 12, 16, 255))
    cap.putalpha(cap_mask)
    canvas.alpha_composite(cap)
    draw = ImageDraw.Draw(canvas)
    draw.line(((637, 158), (847, 158)), fill=(86, 90, 98, 180), width=3)

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
    # Single-colour inverse keeps the exact silhouette readable on the dark
    # footer while the dimensional master is used everywhere else.
    white = Image.new("RGBA", cropped.size, (255, 255, 255, 0))
    white.putalpha(cropped.getchannel("A").point(lambda a: 255 if a > 72 else a))
    white.save(LOGO_WHITE_OUT, optimize=True)
    return cropped


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / path), size=size)


def create_poster(logo: Image.Image) -> None:
    width, height = 1734, 907
    paper = (242, 239, 232, 255)
    poster = Image.new("RGBA", (width, height), paper)
    draw = ImageDraw.Draw(poster)

    # Restrained editorial grid and a solid cobalt field for the dimensional mark.
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

    mark = Image.open(LOGO_OUT).convert("RGBA")
    mark.thumbnail((470, 610), Image.Resampling.LANCZOS)
    poster.alpha_composite(mark, (panel_x + (width - panel_x - mark.width) // 2, 145))
    poster.convert("RGB").save(POSTER_OUT, quality=94, optimize=True)


if __name__ == "__main__":
    high_resolution_logo = extract_logo()
    create_poster(high_resolution_logo)
    print(LOGO_OUT)
    print(LOGO_WHITE_OUT)
    print(POSTER_OUT)
