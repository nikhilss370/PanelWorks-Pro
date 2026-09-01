
export default function Sidebar(){

const btn={
width:"100%",
padding:"12px",
marginBottom:"10px",
borderRadius:"10px",
border:"none",
color:"white",
cursor:"pointer",
fontWeight:"bold"
}

return(

<div style={{
width:240,
background:"#111827",
padding:"18px",
color:"white"
}}>

<h2>PanelWorks</h2>

<button style={{...btn,background:"#16A34A"}}>Wardrobe</button>

<button style={{...btn,background:"#2563EB"}}>TV Unit</button>

<button style={{...btn,background:"#EA580C"}}>Kitchen</button>

<button style={{...btn,background:"#7C3AED"}}>Loft</button>

<button style={{...btn,background:"#0EA5E9"}}>Materials</button>

<button style={{...btn,background:"#DC2626"}}>Reports</button>

</div>

)

}
