"use client";

import Link from "next/link";
import NextImage from "next/image";
import { useState } from "react";

type Props = {
  href: string;
  title: string;
  imgBase: string;   // e.g. "/tiles/aircon" (NO extension)
  fallback: string;  // background colour if image fails
};

export default function Tile({ href, title, imgBase, fallback }: Props) {
  const [src, setSrc] = useState(`${imgBase}.jpeg`);
  const [hideImg, setHideImg] = useState(false);

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
        textDecoration: "none",
      }}
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {!hideImg && (
          <NextImage
            src={src}
            alt=""
            fill
            sizes="200px"
            style={{ objectFit: "cover", opacity: 0.6 }}
            onError={() => {
              if (src.endsWith(".jpeg")) setSrc(`${imgBase}.jpg`);
              else setHideImg(true);
            }}
          />
        )}
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
