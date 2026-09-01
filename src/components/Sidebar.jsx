
export default function Sidebar() {
  const btn = {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold"
  };

  return (
    <div style={{
      width: 240,
      background: "#1E293B",
      padding: 16,
      color: "white"
    }}>
      <h2>PanelWorks Pro</h2>

      <button style={{ ...btn, background: "#16A34A" }}>
        + Wardrobe
      </button>

      <button style={{ ...btn, background: "#2563EB" }}>
        + TV Unit
      </button>

      <button style={{ ...btn, background: "#EA580C" }}>
        + Kitchen
      </button>

      <button style={{ ...btn, background: "#7C3AED" }}>
        Materials
      </button>
    </div>
  );
}
