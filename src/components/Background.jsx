import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Text3DTitle from "../components/canvas/Text3DTitle";

const Background = () => {
  return (
    <div className="absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Text3DTitle />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Background;
