import { useEffect, useRef } from "react";
import * as THREE from "three";

const Background = ({ isDarkMode }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const current = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      current.clientWidth / current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(current.clientWidth, current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    current.appendChild(renderer.domElement);

    scene.background = new THREE.Color(isDarkMode ? "#02030f" : "#87ceeb");

    let stars = [];
    let moon = null;
    let comet = null;
    let sun = null;

    if (isDarkMode) {
      // Estrellas
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.15,
      });
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 300;
      const positions = [];

      for (let i = 0; i < starCount; i++) {
        positions.push(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100
        );
      }

      starGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      const starField = new THREE.Points(starGeometry, starMaterial);
      scene.add(starField);
      stars.push(starField);

      // Luna
      const moonGeometry = new THREE.SphereGeometry(1.2, 32, 32);
      const moonMaterial = new THREE.MeshStandardMaterial({
        color: 0xbbbbbb,
        emissive: 0x888888,
        emissiveIntensity: 0.3,
      });
      moon = new THREE.Mesh(moonGeometry, moonMaterial);
      moon.position.set(-3, 4, -8);
      scene.add(moon);

      // Cometa
      const cometGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      const cometMaterial = new THREE.MeshBasicMaterial({ color: "aqua" });
      comet = new THREE.Mesh(cometGeometry, cometMaterial);
      scene.add(comet);
    } else {
      // Sol
      const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
      const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
      sun = new THREE.Mesh(sunGeometry, sunMaterial);
      sun.position.set(0, 5, -10);
      scene.add(sun);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      stars.forEach((star) => {
        star.rotation.x += 0.0005;
        star.rotation.y += 0.0005;
      });

      if (moon) {
        moon.rotation.y += 0.001;
      }

      if (comet) {
        const t = Date.now() * 0.001;
        comet.position.x = Math.sin(t * 0.7) * 6;
        comet.position.y = Math.cos(t * 0.5) * 3 + 1.5;
        comet.position.z = Math.sin(t * 0.3) * 3;
      }

      if (sun) {
        sun.position.x = Math.sin(Date.now() * 0.001) * 3;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [isDarkMode]);

  return (
    <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />
  );
};

export default Background;
