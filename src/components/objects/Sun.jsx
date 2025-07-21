// components/3d/Sun.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Sun = () => {
  const sunRef = useRef();

  // Rotación lenta
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002;
      sunRef.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={sunRef} position={[5, 5, -10]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        emissive={"#ffd700"}
        emissiveIntensity={1.5}
        color={"#ffff33"}
      />
      <pointLight
        color={"#ffd700"}
        intensity={1.2}
        distance={20}
        decay={2}
        position={[5, 5, -10]}
      />
    </mesh>
  );
};
