import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const EarthModel = () => {
  const earthRef = useRef();
  const { scene } = useGLTF("/assets/low_poly_planet_earth/scene.gltf");

  // Rotate the earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone();
  const scale = 2;

  return (
    <primitive
      ref={earthRef}
      object={clonedScene}
      scale={[scale, scale, scale]} // Adjust scale as needed
      position={[0, 0, 0]}
    />
  );
};

// Pre-load the model
useGLTF.preload("/assets/low_poly_planet_earth/scene.gltf");

export default EarthModel;
