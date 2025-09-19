import Link from "next/link";
import Tile from "../components/Tile";

export default function DirectoryPage() {
  return (
    <main style={{ padding: 16 }}>
      {/* HERO BANNER */}
      <section
        style={{
          position: "relative",
          height: 180,
          borderRadius: 16,
          overflow: "hidden",
          background: "#000",
          marginBottom: 16,
        }}
        aria-label="Directory hero"
      >
        <picture>
          <source srcSet="/tiles/directory.jpeg" />
          <img
            src="/tiles/directory.jpg"
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
              "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.6) 100%)",
          }}
        />
        <h1
          style={{
            position: "absolute",
            left: 16,
            bottom: 14,
            margin: 0,
            color: "white",
            fontSize: 26,
            lineHeight: 1.2,
            textShadow: "0 1px 3px rgba(0,0,0,.5)",
          }}
        >
          Local Directory
        </h1>
      </section>

      {/* Intro + Back link */}
      <p style={{ marginBottom: 10 }}>
        Browse local businesses by category. More being added weekly.
      </p>
      <Link href="/" style={{ display: "inline-block", marginBottom: 16, color: "#4f46e5", fontWeight: 600 }}>
        ← Back to Home
      </Link>

      {/* CATEGORY GRID */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
          gap: 16,
        }}
        aria-label="Directory categories"
      >
        <Tile href="/directory/cleaning"     title="Cleaning"      src="/tiles/services"  fallback="#22c55e" />
        <Tile href="/directory/gardening"    title="Gardening"     src="/tiles/services"  fallback="#16a34a" />
        <Tile href="/directory/trades"       title="Trades"        src="/tiles/services"  fallback="#f59e0b" />
        <Tile href="/directory/professional" title="Professional"  src="/tiles/services"  fallback="#6366f1" />
        <Tile href="/ipw-climatech"          title="IPW Climatech" src="/tiles/aircon"    fallback="#14b8a6" />
      </section>
    </main>
  );
}
