import ServiceCard from "../components/ServiceCard";
export default function Services() {
  return (
    <section style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "12px" }}>Our Services</h1>
      <p>Here you’ll find a list of local services we connect you with in Llantrisant:</p>
      <ul style={{ marginTop: "10px", lineHeight: "1.8" }}>
        <ServiceCard
  title="Automotive Air Conditioning"
  desc="Re-gas, leak test, odour treatment & diagnostics. Mobile service."
/>
<p className="text-sm text-zinc-400 mt-1">By <a className="underline hover:opacity-90" href="/ipw-climatech">IPW Climatech</a></p>
        <li>✅ Cleaning</li>
        <li>✅ Gardening</li>
        <li>✅ Trades & Repairs</li>
        <li>✅ Professional Services</li>
      </ul>
      <p style={{ marginTop: "20px" }}>
        More categories coming soon — if you’d like to list your business, <a href="/contact">get in touch</a>.
      </p>
    </section>
  );
}
