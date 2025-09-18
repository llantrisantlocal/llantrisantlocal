"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

interface TileProps {
  href: string;
  title: string;
  /** preferred prop */
  src?: string;          // "/tiles/aircon" or "/tiles/aircon.jpg"
  /** legacy prop (still supported) */
  img?: string;          // "/tiles/aircon" or "/tiles/aircon.jpg"
  fallback: string;      // colour
}

function normalizeBasePath(p?: string) {
  if (!p) return "";
  // strip extension if present; we'll add .jpeg then fallback to .jpg
  return p.replace(/\.(jpeg|jpg)$/i, "");
}

export default function Tile({ href, title, src, img, fallback }: TileProps) {
  const base = useMemo(() => normalizeBasePath(src || img), [src, img]);
  const [path, setPath] = useState(base ? `${base}.jpeg` : "");
  const [hideImg, setHideImg] = useState(!base);

  return (
    <Link
      href={href}
      style={{
        position: "relative",
        display: "block",
        minHeight: 120,
        borderRadius: 12,
        overflow: "hidden",
        background: fallback,
        color: "white",
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      {!hideImg && path && (
        <Image
          src={path}
          alt={title}
          fill
          sizes="200px"
          style={{ objectFit: "cover", opacity: 0.7 }}
          onError={() => {
            if (path.endsWith(".jpeg")) setPath(`${base}.jpg`);
            else setHideImg(true);
          }}
        />
      )}

      {/* label */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 8,
          textShadow: "0 1px 2px rgba(0,0,0,.5)",
        }}
      >
        {title}
      </div>

      {/* subtle gradient for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.55) 100%)",
          pointerEvents: "none",
        }}
      />
    </Link>
  );
}
