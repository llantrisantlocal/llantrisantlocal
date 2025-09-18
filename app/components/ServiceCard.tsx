type Props = { title: string; desc: string };

export default function ServiceCard({ title, desc }: Props) {
  return (
    <li
      style={{
        background: "#111",
        color: "white",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "12px",
        border: "1px solid #222",
      }}
    >
      <h3 style={{ marginBottom: 6, fontSize: "1.05rem" }}>{title}</h3>
      <p style={{ opacity: 0.9, lineHeight: 1.5 }}>{desc}</p>
    </li>
  );
}
