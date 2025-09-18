import Link from "next/link";
import Image from "next/image";

interface TileProps {
  href: string;
  title: string;
  src?: string;       // ✅ allow src (jpg/jpeg/png etc.)
  fallback: string;
}

export default function Tile({ href, title, src, fallback }: TileProps) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        background: fallback,
        color: "white",
        fontWeight: 600,
        textDecoration: "none",
        minHeight: 120,
      }}
    >
      {src && (
        <Image
          src={src}
          alt={title}
          fill
          sizes="200px"
          style={{ objectFit: "cover", opacity: 0.7 }}
        />
      )}
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 8,
        }}
      >
        {title}
      </span>
    </Link>
  );
}
