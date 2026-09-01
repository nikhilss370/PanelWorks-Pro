
export default function Dashboard({ onStart }) {
  const card = {
    background: "#1E293B",
    borderRadius: "16px",
    padding: "20px",
    border: "1px solid #334155"
  };

  return (
    <div style={{ padding: "25px" }}>
      <h1>PanelWorks Pro</h1>
      <p style={{ color: "#94A3B8" }}>
        Design • Quote • Manufacture
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px"
        }}
      >
        <div style={card}>
          <h2>🆕 New Project</h2>
          <button
            onClick={onStart}
            style={{
              width: "100%",
              padding: "14px",
              background: "#16A34A",
              color: "white",
              border: "none",
              borderRadius: "10px"
            }}
          >
            Start Designing
          </button>
        </div>

        <div style={card}>
          <h2>🚪 Wardrobe</h2>
          <p>2-door • 3-door • Sliding</p>
        </div>

        <div style={card}>
          <h2>📺 TV Unit</h2>
          <p>Floating • Floor Mounted</p>
        </div>

        <div style={card}>
          <h2>🍳 Kitchen</h2>
          <p>L Shape • U Shape • Straight</p>
        </div>
      </div>
    </div>
  );
}
