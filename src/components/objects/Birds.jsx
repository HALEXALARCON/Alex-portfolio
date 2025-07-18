// src/components/objects/Birds.jsx

import { useMemo } from "react";
import { Cone } from "@react-three/drei";

const Birds = () => {
  const positions = useMemo(
    () => [
      [-3, 4, -10],
      [2, 3.5, -9],
      [4, 5, -11],
    ],
    []
  );

  return (
    <>
      {positions.map((pos, i) => (
        <Cone
          key={i}
          args={[0.2, 0.5, 6]}
          position={pos}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="black" />
        </Cone>
      ))}
    </>
  );
};

export default Birds;
