import Link from "next/link";
import Hero from "./components/Hero";
import Tile from "./components/Tile";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <Hero imgBase="/tiles/aircon">
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
      </Hero>

      {/* TILES */}
      <section
        style={{
          padding: "0 16px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16,
        }}
      >
        <Tile href="/directory"     title="Directory"      imgBase="/tiles/directory"     fallback="#0ea5e9" />
        <Tile href="/services"      title="Services"       imgBase="/tiles/services"      fallback="#22c55e" />
        <Tile href="/deals"         title="Deals"          imgBase="/tiles/deals"         fallback="#ef4444" />
        <Tile href="/contact"       title="Contact"        imgBase="/tiles/contact"       fallback="#a78bfa" />
        <Tile href="/ipw-climatech" title="IPW Climatech"  imgBase="/tiles/aircon"        fallback="#14b8a6" />
      </section>
    </main>
  );
}
