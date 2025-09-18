// app/deals/page.tsx
import Tile from "../components/Tile";
import Link from "next/link";

export default function DealsPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Deals</h1>
      <p style={{ marginBottom: 16 }}>
        Local offers and discounts from businesses around Llantrisant.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        <Tile
          href="/ipw-climatech"
          title="£10 off vehicle A/C re-gas"
          src="/tiles/aircon"     // <- src, not img
          fallback="#ef4444"
        />
      </div>

      <p style={{ marginTop: 24 }}>
        Are you a local business with a special offer?{" "}
        <Link href="/contact">Get in touch</Link>.
      </p>
    </main>
  );
}
