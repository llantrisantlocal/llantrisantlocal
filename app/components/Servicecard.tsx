type Props = {
  title: string;
  desc: string;
};

export default function ServiceCard({ title, desc }: Props) {
  return (
    <li
      style={{
        background: "#1a1a1a",
        color: "white",
        padding: "20px",
        marginBottom: "12px",
        borderRadius: "12px",
      }}
    >
      <h3 style={{ marginBottom: "8px", fontSize: "1.25rem" }}>{title}</h3>
      <p style={{ opacity: 0.9 }}>{desc}</p>
    </li>
  );
}
