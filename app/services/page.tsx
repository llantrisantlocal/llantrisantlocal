import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section style={{ padding: "20px" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Services</h1>
      <p>Here you’ll find a list of local services.</p>

      <ul style={{ marginTop: 14, lineHeight: 1.6, paddingLeft: 0, listStyle: "none" }}>
        <ServiceCard
          title="Automotive Air Conditioning"
          desc="Re-gas, leak test, odour treatment & diagnostics for cars and vans (mobile)."
        />
        <ServiceCard
          title="Coming soon: Domestic A/C"
          desc="Split-system installs and maintenance from late November (post-qualification)."
        />
      </ul>
    </section>
  );
}
