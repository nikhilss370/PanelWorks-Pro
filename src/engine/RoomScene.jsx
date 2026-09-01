
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function RoomScene() {
  return (
    <Canvas camera={{ position: [8, 6, 8] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 8, 5]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial color="#8d7b68" />
      </mesh>

      <gridHelper args={[12, 12]} />

      <mesh position={[0, 2, -4]}>
        <boxGeometry args={[2, 4, 1]} />
        <meshStandardMaterial color="#5a3e2b" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}
