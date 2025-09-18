import Link from "next/link";
import Image from "next/image";

type TileProps = {
  href: string;
  title: string;
  img: string;      // base path, e.g. "/tiles/aircon" (NO extension)
  fallback: string; // solid colour (e.g. "#0ea5e9")
};

// Prefer .jpeg, fallback .jpg. On server we can’t check, so default to .jpeg.
// If the image isn’t there, the tile still looks fine thanks to the fallback bg + overlay.
function resolveSrc(base: string) {
  if (typeof window !== "undefined") {
    const jpeg = `${base}.jpeg`;
    const jpg = `${base}.jpg`;
    const test = new Image();
    test.src = jpeg;
    if (test.complete || test.naturalWidth > 0) return jpeg;
    return jpg;
  }
  return `${base}.jpeg`;
}

export default function Tile({ href, title, img, fallback }: TileProps) {
  const src = resolveSrc(img);

  return (
    <Link
      href={href}
      style={{
        position: "relative",
        display: "block",
        height: 140,
        borderRadius: 12,
        overflow: "hidden",
        background: fallback, // safe fallback even if image 404s
        color: "white",
        textDecoration: "none",
      }}
    >
      {/* BG image (won’t intercept clicks) */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {src ? (
          <Image
            src={src}
            alt=""
            fill
            sizes="200px"
            style={{ objectFit: "cover", opacity: 0.6 }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: 12,
          right: 12,
          zIndex: 1,
          fontWeight: 800,
          letterSpacing: 0.3,
          fontSize: 16,
          textShadow: "0 1px 2px rgba(0,0,0,.5)",
        }}
      >
        {title}
      </div>
    </Link>
  );
}
