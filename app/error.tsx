"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main style={{ padding: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Something went wrong</h1>
      <p style={{ color: "#94a3b8", marginBottom: 16 }}>
        Sorry about that. You can try again, or head back to the homepage.
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <button
          onClick={reset}
          style={{
            background: "#111",
            color: "white",
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,.15)",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Try again
        </button>
        <a
          href="/"
          style={{
            background: "white",
            color: "#111",
            padding: "10px 14px",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
