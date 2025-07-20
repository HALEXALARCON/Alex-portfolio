// Stars.jsx
import { useMemo, useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";

export default function Stars() {
  const ref = useRef();
  const particles = 5000;
  const positions = useMemo(() => random.inSphere(new Float32Array(particles * 3), { radius: 50 }), []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent size={0.05} color="#ffffff" sizeAttenuation={true} />
    </Points>
  );
}
