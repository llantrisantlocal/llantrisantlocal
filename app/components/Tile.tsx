"use client";
import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  title: string;
  img?: string;     // optional background image
  fallback?: string; // fallback colour if no image
};

export default function Tile({ href, title, img, fallback = "#1a1a1a" }: Props) {
  return (
    <Link
      href={href}
      style={{
        position: "relative",
        display: "block",
        height: 140,
        borderRadius: 12,
        overflow: "hidden",
        background: fallback,
        color: "white",
        fontWeight: "bold",
        textDecoration: "none",
      }}
    >
      {/* background image if available */}
      {img && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Image
            src={img}
            alt=""
            fill
            sizes="200px"
            style={{ objectFit: "cover", opacity: 0.6 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)",
            }}
          />
        </div>
      )}

      {/* text label */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: 12,
          zIndex: 1,
          fontSize: 16,
          textShadow: "0 1px 2px rgba(0,0,0,.5)",
        }}
      >
        {title}
      </div>
    </Link>
  );
}
