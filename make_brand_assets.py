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
    """Build TEC CAPITAL's flat editorial T as a transparent master mark."""
    canvas = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)

    # A compact, unmistakable T. Its asymmetric top and angled terminals echo
    # the site's editorial grids while avoiding the synthetic 3D treatment.
    ink = (18, 20, 22, 255)
    blue = (21, 88, 232, 255)
    draw.polygon(
        ((164, 210), (760, 210), (724, 348), (548, 348),
         (548, 824), (394, 824), (394, 348), (164, 348)),
        fill=ink,
    )

    # Forward accent: one precise diagonal cut integrated into the top bar.
    # It carries the signature cobalt without compromising small-size reading.
    draw.polygon(((650, 210), (860, 210), (824, 348), (614, 348)), fill=blue)

    # A subtle ivory keyline separates the two solids and keeps the mark crisp.
    draw.line(((650, 210), (614, 348)), fill=(242, 239, 232, 255), width=10)

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
    # Single-colour inverse keeps the same silhouette readable on dark fields.
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

    # Restrained editorial grid and a solid cobalt field for the inverse mark.
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
