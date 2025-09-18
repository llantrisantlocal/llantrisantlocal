import Tile from "../components/Tile";

export default function ServicesPage() {
  return (
    <section style={{ padding: 16 }}>
      {/* Featured (your business) */}
      <Tile
        href="/ipw-climatech"
        title="IPW Climatech — Automotive A/C"
        img="/tiles/aircon"
        fallback="#14b8a6"
      />

      <h2 style={{ marginTop: 16, marginBottom: 8, fontSize: 20, fontWeight: 700 }}>
        Other Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 14,
        }}
      >
        <Tile href="/directory/cleaning"  title="Cleaning"  img="/tiles/services" fallback="#22c55e" />
        <Tile href="/directory/gardening" title="Gardening" img="/tiles/services" fallback="#16a34a" />
        <Tile href="/directory/trades"    title="Trades"    img="/tiles/services" fallback="#f59e0b" />
      </div>
    </section>
  );
}
