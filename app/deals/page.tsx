import Tile from "../components/Tile";

export default function DealsPage() {
  return (
    <section style={{ padding: 16 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Deals</h1>
      <p style={{ marginBottom: 16, color: "#64748b" }}>
        Local offers and discounts around Llantrisant.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16,
        }}
      >
        <Tile
          href="/ipw-climatech"
          title="£10 off vehicle A/C re-gas"
          src="/tiles/aircon"          // ← NO extension required; .jpg/.jpeg both ok
          fallback="#ef4444"
        />
        {/* Example placeholder offers */}
        <Tile href="/directory" title="Local café: free cookie" fallback="#0ea5e9" />
        <Tile href="/directory" title="Barber: 2 for 1 Tues" fallback="#22c55e" />
      </div>
    </section>
  );
}
