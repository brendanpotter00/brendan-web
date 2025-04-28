// src/threejs_models/CampingModel.jsx
import React, { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function CampingModel({ wireframe = false }) {
  const campingRef = useRef();
  const { scene } = useGLTF("/assets/low_poly_forest_campfire/scene.gltf");

  // Clone the scene once
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // Wireframe toggling
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.wireframe = wireframe;
      }
    });
  }, [clonedScene, wireframe]);

  // Bob up and down
  useFrame(({ clock }) => {
    if (campingRef.current) {
      const t = clock.getElapsedTime();
      const amplitude = 0.3; // vertical range
      const speed = 0.3; // cycles per second
      campingRef.current.position.y = Math.sin(t * speed) * amplitude;
    }
  });

  const scale = 0.5;

  return (
    <primitive
      ref={campingRef}
      object={clonedScene}
      scale={[scale, scale, scale]}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
    />
  );
}

// Pre-load the model
useGLTF.preload("/assets/low_poly_forest_campfire/scene.gltf");
