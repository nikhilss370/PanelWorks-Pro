
export default function PropertiesPanel(){

  const row={
    marginBottom:"14px"
  }

  return(
    <div style={{
      width:260,
      background:"#1E293B",
      color:"white",
      padding:"20px"
    }}>

      <h2>Properties</h2>

      <div style={row}>
        Width
        <input type="range" min="1200" max="3600" defaultValue="2000" style={{width:"100%"}}/>
      </div>

      <div style={row}>
        Height
        <input type="range" min="1800" max="3000" defaultValue="2400" style={{width:"100%"}}/>
      </div>

      <div style={row}>
        Depth
        <input type="range" min="300" max="900" defaultValue="600" style={{width:"100%"}}/>
      </div>

      <button style={{
        width:"100%",
        padding:"14px",
        background:"#16A34A",
        color:"white",
        border:"none",
        borderRadius:"10px",
        marginTop:"20px"
      }}>
        Apply Material
      </button>

    </div>
  )
}
