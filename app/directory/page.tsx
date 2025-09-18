import Tile from "../components/Tile";

export default function DirectoryPage() {
  return (
    <section style={{ padding: 16 }}>
      {/* HERO */}
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
        {/* optional bg image if you add /public/tiles/directory.(jpeg|jpg) */}
        <Tile
          href="/directory"
          title="Local Directory"
          img="/tiles/directory"
          fallback="#0ea5e9"
        />
      </div>

      <p style={{ marginBottom: 14 }}>
        Browse local businesses by category. More being added weekly.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 14,
        }}
      >
        <Tile href="/directory/cleaning"     title="Cleaning"      img="/tiles/services"  fallback="#22c55e" />
        <Tile href="/directory/gardening"    title="Gardening"     img="/tiles/services"  fallback="#16a34a" />
        <Tile href="/directory/trades"       title="Trades"        img="/tiles/services"  fallback="#f59e0b" />
        <Tile href="/directory/professional" title="Professional"  img="/tiles/services"  fallback="#6366f1" />
        <Tile href="/ipw-climatech"          title="IPW Climatech" img="/tiles/aircon"    fallback="#14b8a6" />
      </div>
    </section>
  );
}
