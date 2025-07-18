// Background.jsx
import { Canvas } from "@react-three/fiber";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <color attach="background" args={["skyblue"]} />
      </Canvas>
    </div>
  );
};

export default Background;
