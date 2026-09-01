
import { useState } from "react";

export default function Wardrobe() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <group position={[0,2,-3]} onClick={() => setSelected(!selected)}>
      {/* Body */}
      <mesh>
        <boxGeometry args={[2,4,0.6]} />
        <meshStandardMaterial color={selected ? "#2563EB" : "#8B5A2B"} />
      </mesh>

      {/* Left Door */}
      <group
        position={[-0.5,0,0.31]}
        rotation={[0, open ? -1.2 : 0, 0]}
        onClick={(e)=>{
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <mesh position={[0.45,0,0]}>
          <boxGeometry args={[0.9,3.9,0.02]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>

      {/* Right Door */}
      <mesh position={[0.45,0,0.31]}>
        <boxGeometry args={[0.9,3.9,0.02]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}
