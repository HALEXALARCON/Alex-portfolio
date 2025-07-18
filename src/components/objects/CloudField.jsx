// src/components/objects/CloudField.jsx
import Cloud from "./Cloud";

const CloudField = ({ count = 20 }) => {
  const clouds = Array.from({ length: count }).map((_, i) => {
    const x = Math.random() * 60 - 30;
    const y = Math.random() * 10 + 1;
    const z = Math.random() * 60 - 30;
    const scale = Math.random() * 1.5 + 0.8;
    const speed = Math.random() * 0.02 + 0.005;

    return <Cloud key={i} position={[x, y, z]} scale={scale} speed={speed} />;
  });

  return <>{clouds}</>;
};

export default CloudField;
