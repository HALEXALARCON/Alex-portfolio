// Moon.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Moon() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });
  return (
    <mesh ref={ref} position={[0, 3, -10]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#eeeeff" emissive="#555566" />
    </mesh>
  );
}
