import Tile from "../components/Tile";

export default function DealsPage() {
  return (
    <section style={{ padding: 16 }}>
      <Tile
        href="/ipw-climatech"
        title="£10 off vehicle A/C re-gas — IPW Climatech"
        img="/tiles/aircon"
        fallback="#ef4444"
      />

      <div style={{ marginTop: 12, fontSize: 14, color: "#e5e7eb" }}>
        Quote <strong>LLANTRISANT10</strong>. Includes performance check & leak test. Ends 30 Nov.
      </div>
    </section>
  );
}
