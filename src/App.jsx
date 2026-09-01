
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import PropertiesPanel from "./ui/PropertiesPanel";
import RoomScene from "./engine/RoomScene";

export default function App(){

  const [editor,setEditor]=useState(false);

  if(!editor){
    return(
      <div style={{background:"#0F172A",minHeight:"100vh",color:"white"}}>
        <Dashboard onStart={()=>setEditor(true)}/>
      </div>
    );
  }

  return(
    <div style={{
      display:"grid",
      gridTemplateColumns:"240px 1fr 240px",
      height:"100vh",
      background:"#0F172A"
    }}>
      <Sidebar/>
      <RoomScene/>
      <PropertiesPanel/>
    </div>
  );
}



   
