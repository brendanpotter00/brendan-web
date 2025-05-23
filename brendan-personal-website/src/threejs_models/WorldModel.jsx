// src/threejs_models/WorldModel.jsx
import React, { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function WorldModel({ wireframe = false }) {
  const worldRef = useRef();
  const { scene } = useGLTF("/assets/low_poly_world/scene.gltf");

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
    if (worldRef.current) {
      const t = clock.getElapsedTime();
      const amplitude = 0.6; // vertical range
      const speed = 0.8; // cycles per second
      worldRef.current.position.y = Math.sin(t * speed) * amplitude;
    }
  });

  const scale = 0.5;
  const yawOffset = -Math.PI / 6; // tilt 30° to the left

  return (
    <primitive
      ref={worldRef}
      object={clonedScene}
      scale={[scale, scale, scale]}
      rotation={[0, yawOffset, 0]}
      position={[0, 0, 0]}
    />
  );
}

// Pre-load the model
useGLTF.preload("/assets/low_poly_world/scene.gltf");
