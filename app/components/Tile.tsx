"use client";
import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  title: string;
  img?: string;     // optional: shows color fallback if missing
  fallback?: string;
  height?: number;
};

export default function Tile({
  href,
  title,
  img,
  fallback = "#111827",
  height = 140,
}: Props) {
  return (
    <Link
      href={href}
      style={{
        position: "relative",
        display: "block",
        height,
        borderRadius: 16,
        overflow: "hidden",
        background: fallback,
        color: "white",
        textDecoration: "none",
      }}
    >
      {/* background image – not clickable */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {img ? (
          <Image
            src={img}
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
              "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.6) 100%)",
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
          fontSize: 18,
          textShadow: "0 1px 2px rgba(0,0,0,.5)",
        }}
      >
        {title}
      </div>
    </Link>
  );
}
