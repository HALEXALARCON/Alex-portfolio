import { useFrame, useLoader } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import helvetiker from "../../assets/fonts/helvetiker_regular.typeface.json";
import { useRef } from "react";

const Text3DTitle = () => {
  const font = useLoader(FontLoader, helvetiker);
  const textRef = useRef();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Text3D
        ref={textRef}
        font={font}
        size={2}
        height={0.5}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.03}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Alex Alarcón
        <meshStandardMaterial color="#ffc107" />
      </Text3D>
    </group>
  );
};

export default Text3DTitle;
