
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import RoomScene from "./engine/RoomScene";

export default function App() {
  const [editor, setEditor] = useState(false);

  if (!editor) {
    return (
      <div style={{
        background: "#0F172A",
        color: "white",
        minHeight: "100vh"
      }}>
        <Dashboard onStart={() => setEditor(true)} />
      </div>
    );
  }

  return (
    <div style={{ height: "100vh" }}>
      <RoomScene />
    </div>
  );
}


   
