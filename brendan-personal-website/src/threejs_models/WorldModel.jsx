import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const WorldModel = () => {
  const worldRef = useRef();
  const { scene } = useGLTF("/assets/low_poly_world/scene.gltf");

  // Bob up and down
  useFrame(({ clock }) => {
    if (worldRef.current) {
      const t = clock.getElapsedTime();
      const amplitude = 0.5; // how far up/down
      const speed = 0.5; // oscillations per second
      worldRef.current.position.y = Math.sin(t * speed) * amplitude;
    }
  });

  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone();
  const scale = 0.5;
  const yawOffset = -Math.PI / 6; // tilt 30° to the left

  return (
    <primitive
      ref={worldRef}
      object={clonedScene}
      scale={[scale, scale, scale]}
      rotation={[0, yawOffset, 0]}
      position={[0, yawOffset, 0]}
    />
  );
};

useGLTF.preload("/assets/low_poly_world/scene.gltf");

export default WorldModel;
