"use client";

import NextImage from "next/image";
import { useState } from "react";

type Props = {
  imgBase: string; // e.g. "/tiles/aircon"
  height?: number;
  children?: React.ReactNode;
};

export default function Hero({ imgBase, height = 220, children }: Props) {
  const [src, setSrc] = useState(`${imgBase}.jpeg`);
  const [hideImg, setHideImg] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        minHeight: height,
        display: "flex",
        alignItems: "flex-end",
        borderRadius: 16,
        overflow: "hidden",
        margin: "16px",
        background: "#000",
      }}
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {!hideImg && (
          <NextImage
            src={src}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.45 }}
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
              "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: 20, color: "white", width: "100%" }}>
        {children}
      </div>
    </section>
  );
}
