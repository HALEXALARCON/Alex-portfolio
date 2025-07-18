// components/objects/Cloud.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cloud = ({ position, speed, scale }) => {
  const cloudRef = useRef();

  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.position.x += speed;
      if (cloudRef.current.position.x > 50) {
        cloudRef.current.position.x = -50;
      }
    }
  });

  return (
    <mesh ref={cloudRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="white" transparent opacity={0.8} />
    </mesh>
  );
};

export default Cloud;
