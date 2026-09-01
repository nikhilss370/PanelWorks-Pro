
export default function PropertiesPanel() {
  return (
    <div style={{
      width:240,
      background:"#1E293B",
      color:"white",
      padding:16
    }}>
      <h3>Properties</h3>

      <p>Width: 2000 mm</p>
      <p>Height: 2400 mm</p>
      <p>Depth: 600 mm</p>

      <hr/>

      <p>Doors: 2</p>
      <p>Shelves: 5</p>

      <hr/>

      <button style={{
        width:"100%",
        padding:"12px",
        background:"#16A34A",
        border:"none",
        color:"white",
        borderRadius:"8px"
      }}>
        Apply Material
      </button>
    </div>
  );
}
