// Comet.jsx
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { SpriteMaterial, Sprite } from "three";

export default function Comet({ texture }) {
  const ref = useRef();
  const [pos, setPos] = useState([-50, 20, -10]);
  
  useFrame(({ clock }) => {
    const t = clock.elapsedTime % 10;
    const x = -50 + t * 10;
    if (x > 50) setPos([-50, 20, -10]);
    else setPos([x, 20 - (t - 5) ** 2 / 5, -10]);
    ref.current.position.set(...pos);
  });

  return (
    <sprite ref={ref}>
      <spriteMaterial attach="material" map={texture} color="#ffffff" />
    </sprite>
  );
}
