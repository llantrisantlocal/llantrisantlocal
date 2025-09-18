import Link from "next/link";
import Image from "next/image";
import Tile from "./components/Tile";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: 220,
          display: "flex",
          alignItems: "flex-end",
          borderRadius: 16,
          overflow: "hidden",
          margin: "16px",
          background: "#000",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Image
            src="/tiles/aircon.jpeg"  // ✅ uses the file you already uploaded
            alt="Automotive air conditioning"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.45 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%)",
            }}
          />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: 20, color: "white" }}>
          <h1 style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>LLANTRISANT LOCAL</h1>
          <p style={{ margin: "8px 0 12px", opacity: 0.9 }}>
            A town that’s built on a hill cannot be hidden.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "white",
              color: "#111",
              padding: "10px 14px",
              borderRadius: 999,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* TILE GRID */}
      <section
        style={{
          padding: "0 16px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16,
        }}
      >
        <Tile href="/directory" title="Directory" fallback="#0ea5e9" />
        <Tile href="/services" title="Services" fallback="#22c55e" />
        <Tile href="/deals" title="Deals" fallback="#ef4444" />
        <Tile href="/contact" title="Contact" fallback="#a78bfa" />
        <Tile
          href="/ipw-climatech"
          title="IPW Climatech"
          img="/tiles/aircon.jpeg" // ✅ will show your image
          fallback="#14b8a6"
        />
      </section>
    </main>
  );
}
