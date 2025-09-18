import Tile from "../components/Tile";

export default function DirectoryPage() {
  return (
    <section style={{ padding: 16 }}>
      {/* HERO BANNER */}
      <div
        style={{
          position: "relative",
          height: 160,
          borderRadius: 16,
          overflow: "hidden",
          marginBottom: 16,
          background: "#000",
        }}
      >
        {/* Optional background image: add either /public/tiles/directory.jpeg or .jpg */}
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
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        <h1
          style={{
            position: "absolute",
            left: 16,
            bottom: 14,
            margin: 0,
            color: "white",
            fontSize: 24,
            lineHeight: 1.2,
          }}
        >
          Local Directory
        </h1>
      </div>

      <p style={{ marginBottom: 14 }}>
        Browse local businesses by category. More being added weekly.
      </p>

      {/* CATEGORY GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 14,
        }}
      >
        <Tile
          href="/directory/cleaning"
          title="Cleaning"
          src="/tiles/services"
          fallback="#22c55e"
        />
        <Tile
          href="/directory/gardening"
          title="Gardening"
          src="/tiles/services"
          fallback="#16a34a"
        />
        <Tile
          href="/directory/trades"
          title="Trades"
          src="/tiles/services"
          fallback="#f59e0b"
        />
        <Tile
          href="/directory/professional"
          title="Professional"
          src="/tiles/services"
          fallback="#6366f1"
        />
        <Tile
          href="/ipw-climatech"
          title="IPW Climatech"
          src="/tiles/aircon"
          fallback="#14b8a6"
        />
      </div>
    </section>
  );
}
