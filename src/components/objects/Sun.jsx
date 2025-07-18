import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

const Sun = () => {
  const sunRef = useRef();

  // Rotación suave del sol
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={sunRef} position={[0, 5, -10]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        color="#FFD700"
        emissive="#FFEF00"
        emissiveIntensity={1.2}
        toneMapped={false}
      />
    </mesh>
  );
};

export default Sun;
