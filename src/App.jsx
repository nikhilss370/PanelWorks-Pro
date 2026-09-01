
import React from "react";

export default function App() {
  const button = {
    width: "100%",
    padding: "14px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px"
  };

  return (
    <div style={{
      background:"#0F172A",
      color:"white",
      minHeight:"100vh",
      fontFamily:"Arial, sans-serif"
    }}>
      <header style={{
        padding:"18px 24px",
        borderBottom:"1px solid #334155",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
        <div>
          <h1 style={{margin:0}}>PanelWorks Pro</h1>
          <p style={{margin:"4px 0",color:"#94A3B8"}}>
            Design • Quote • Manufacture
          </p>
        </div>

        <div style={{
          background:"#1E293B",
          padding:"8px 14px",
          borderRadius:"20px"
        }}>
          Live
        </div>
      </header>

      <main style={{
        padding:"25px",
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
        gap:"20px"
      }}>
        <div style={card}>
          <h2>🆕 New Project</h2>
          <p>Create a new interior project.</p>
          <button style={{...button,background:"#16A34A"}}>
            Start Designing
          </button>
        </div>

        <div style={card}>
          <h2>📂 Open Project</h2>
          <p>Continue an existing design.</p>
          <button style={{...button,background:"#2563EB"}}>
            Open
          </button>
        </div>

        <div style={card}>
          <h2>🚪 Wardrobe Template</h2>
          <p>2-door, 3-door, sliding and walk-in wardrobes.</p>
          <button style={{...button,background:"#EA580C"}}>
            Use Template
          </button>
        </div>

        <div style={card}>
          <h2>📺 TV Unit Template</h2>
          <p>Floating and floor-mounted TV units.</p>
          <button style={{...button,background:"#7C3AED"}}>
            Use Template
          </button>
        </div>

        <div style={card}>
          <h2>🍳 Kitchen Template</h2>
          <p>Straight, L-shaped and U-shaped kitchens.</p>
          <button style={{...button,background:"#0891B2"}}>
            Use Template
          </button>
        </div>

        <div style={card}>
          <h2>📊 Carpenter Mode</h2>
          <p>Generate cut lists and workshop drawings.</p>
          <button style={{...button,background:"#DC2626"}}>
            Open
          </button>
        </div>
      </main>

      <footer style={{
        padding:"18px",
        textAlign:"center",
        color:"#94A3B8"
      }}>
        PanelWorks Pro V0.3 • Powered by React + Three.js
      </footer>
    </div>
  );
}

const card = {
  background:"#1E293B",
  borderRadius:"16px",
  padding:"22px",
  border:"1px solid #334155",
  boxShadow:"0 10px 30px rgba(0,0,0,0.25)"
};
