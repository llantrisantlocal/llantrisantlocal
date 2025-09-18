"use client";

import Link from "next/link";
import { useState } from "react";

type TileProps = {
  href: string;
  title: string;
  /** Path without extension, e.g. "/tiles/services" */
  src?: string;
  fallback?: string;
  subtitle?: string;
};

export default function Tile({ href, title, src, fallback = "#111", subtitle }: TileProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "relative",
          height: 160,
          borderRadius: 14,
          overflow: "hidden",
          background: fallback,
          color: "white",
          boxShadow: hovered
            ? "0 10px 24px rgba(0,0,0,.25)"
            : "0 6px 16px rgba(0,0,0,.15)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "transform .18s ease, box-shadow .18s ease",
        }}
      >
        {src ? (
          <picture>
            <source srcSet={`${src}.jpeg`} />
            <img
              src={`${src}.jpg`}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                opacity: 0.55,
                transform: hovered ? "scale(1.04)" : "scale(1)",
                transition: "transform .25s ease, opacity .25s ease",
              }}
            />
          </picture>
        ) : null}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.65) 100%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "absolute", left: 12, right: 12, bottom: 12 }}>
          <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.2 }}>{title}</div>
          {subtitle ? (
            <div style={{ fontSize: 12, opacity: 0.9, marginTop: 2 }}>{subtitle}</div>
          ) : (
            <div style={{ fontSize: 12, opacity: 0.9, marginTop: 2 }}>Explore →</div>
          )}
        </div>
      </div>
    </Link>
  );
}
