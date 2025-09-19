import Link from "next/link";
import Tile from "./components/Tile";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: 240,
          display: "flex",
          alignItems: "flex-end",
          borderRadius: 16,
          overflow: "hidden",
          margin: 16,
          background: "#000",
        }}
        aria-label="Llantrisant Local hero"
      >
        {/* jpeg → jpg fallback */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <picture>
            <source srcSet="/tiles/aircon.jpeg" />
            <img
              src="/tiles/aircon.jpg"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.45,
                display: "block",
              }}
            />
          </picture>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.65) 100%)",
            }}
          />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: 20, color: "white" }}>
          <h1 style={{ margin: 0, fontSize: 30, lineHeight: 1.2 }}>LLANTRISANT LOCAL</h1>
          <p style={{ margin: "8px 0 14px", opacity: 0.9 }}>
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

      {/* COLOURFUL GRID */}
      <section
        style={{
          padding: "0 16px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
          gap: 16,
        }}
        aria-label="Primary sections"
      >
        <Tile href="/directory"     title="Directory"     src="/tiles/directory"     fallback="#0ea5e9" subtitle="Explore →" />
        <Tile href="/services"      title="Services"      src="/tiles/services"      fallback="#22c55e" subtitle="Explore →" />
        <Tile href="/deals"         title="Deals"         src="/tiles/deals"         fallback="#ef4444" subtitle="Save now →" />
        <Tile href="/contact"       title="Contact"       src="/tiles/contact"       fallback="#a78bfa" subtitle="Get in touch →" />
        <Tile href="/ipw-climatech" title="IPW Climatech" src="/tiles/aircon"        fallback="#14b8a6" subtitle="Book a service →" />
      </section>
    </main>
  );
}
