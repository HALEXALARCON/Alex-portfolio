import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Color, GridHelper } from "three";
import Sun from "../objects/Sun";
import Birds from "../objects/Birds";
import CloudField from "../objects/CloudField";

const SkyScene = ({ isDarkMode }) => {
  const { scene } = useThree();

  useEffect(() => {
    console.log("SkyScene loaded - darkMode:", isDarkMode);
    scene.background = new Color(isDarkMode ? "#000000" : "#87CEEB");
  }, [isDarkMode, scene]);

  useEffect(() => {
    const helper = new GridHelper(10, 10);
    scene.add(helper);
    return () => scene.remove(helper);
  }, [scene]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <Sun />
      <Birds />
      {!isDarkMode && <CloudField />}
    </>
  );
};

export default SkyScene;
