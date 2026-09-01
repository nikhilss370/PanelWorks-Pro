
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

function Wardrobe(){

  const [selected,setSelected]=useState(false);

  return(
    <group
      position={[0,2,-3]}
      onClick={()=>setSelected(!selected)}
    >

      <mesh>
        <boxGeometry args={[2,4,0.6]}/>
        <meshStandardMaterial color={selected?"#2563EB":"#8B5A2B"}/>
      </mesh>

      <mesh position={[-0.45,0,0.31]}>
        <boxGeometry args={[0.9,3.9,0.02]}/>
        <meshStandardMaterial color="#FFFFFF"/>
      </mesh>

      <mesh position={[0.45,0,0.31]}>
        <boxGeometry args={[0.9,3.9,0.02]}/>
        <meshStandardMaterial color="#FFFFFF"/>
      </mesh>

    </group>
  );
}

export default function RoomScene(){

  return(
    <Canvas camera={{position:[8,6,8]}}>

      <ambientLight intensity={1}/>

      <directionalLight position={[5,8,5]}/>

      <mesh rotation={[-Math.PI/2,0,0]}>
        <planeGeometry args={[12,10]}/>
        <meshStandardMaterial color="#8D7B68"/>
      </mesh>

      <gridHelper args={[12,12]}/>

      <Wardrobe/>

      <OrbitControls/>

    </Canvas>
  );
}
