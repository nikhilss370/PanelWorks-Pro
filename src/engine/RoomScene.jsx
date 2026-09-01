
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Wardrobe from "../components/Wardrobe";

function Wall({position,rotation,size}) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={size}/>
      <meshStandardMaterial color="#E7E2D6"/>
    </mesh>
  );
}

export default function RoomScene() {
  return (
    <Canvas camera={{position:[8,6,8]}}>
      <ambientLight intensity={1}/>
      <directionalLight position={[5,8,5]}/>

      {/* Floor */}
      <mesh rotation={[-Math.PI/2,0,0]}>
        <planeGeometry args={[12,10]}/>
        <meshStandardMaterial color="#8D7B68"/>
      </mesh>

      {/* Walls */}
      <Wall position={[0,4,-5]} rotation={[0,0,0]} size={[12,8]}/>
      <Wall position={[-6,4,0]} rotation={[0,Math.PI/2,0]} size={[10,8]}/>
      <Wall position={[6,4,0]} rotation={[0,-Math.PI/2,0]} size={[10,8]}/>

      <gridHelper args={[12,12]}/>

      <Wardrobe/>

      <OrbitControls enableDamping/>
    </Canvas>
  );
}
