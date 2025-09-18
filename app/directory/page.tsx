import Tile from "../components/Tile";

export default function DirectoryPage() {
  return (
    <section style={{ padding: "16px" }}>
      <h1 style={{ fontSize: 28, margin: "0 0 12px" }}>Directory</h1>
      <p style={{ marginBottom: 16 }}>
        Browse local businesses by category. More being added weekly.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 14,
        }}
      >
        <Tile href="/directory/cleaning" title="Cleaning" fallback="#0ea5e9" />
        <Tile href="/directory/gardening" title="Gardening" fallback="#22c55e" />
        <Tile href="/directory/trades" title="Trades" fallback="#f59e0b" />
        <Tile href="/directory/professional" title="Professional" fallback="#6366f1" />
      </div>
    </section>
  );
}
