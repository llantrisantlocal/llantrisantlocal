import Link from "next/link";
import Image from "next/image";

type TileProps = {
  href: string;
  title: string;
  img: string; // base path, e.g. "/tiles/aircon"
  fallback: string;
};

// Helper: prefer .jpeg, fallback to .jpg
function imagePath(base: string) {
  if (typeof window !== "undefined") {
    const jpeg = `${base}.jpeg`;
    const jpg = `${base}.jpg`;

    const img = new Image();
    img.src = jpeg;
    if (img.complete || img.width > 0) return jpeg;

    return jpg;
  }
  // server-side default
  return `${base}.jpeg`;
}

export default function Tile({ href, title, img, fallback }: TileProps) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        borderRadius: 12,
        overflow: "hidden",
        background: fallback,
        color: "white",
        textDecoration: "none",
      }}
    >
      <div style={{ position: "relative", height: 120 }}>
        <Image
          src={imagePath(img.replace(/\.(jpeg|jpg)$/i, ""))}
          alt={title}
          fill
          sizes="200px"
          style={{ objectFit: "cover", opacity: 0.85 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>
      <div style={{ padding: "8px 12px", fontWeight: 600, fontSize: 16 }}>
        {title}
      </div>
    </Link>
  );
}
