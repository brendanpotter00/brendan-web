// src/threejs_models/EarthModel.jsx
import React, { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function EarthModel({ wireframe = false }) {
  const earthRef = useRef();
  const { scene } = useGLTF("/assets/low_poly_planet_earth/scene.gltf");

  // Clone the scene once
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // Toggle wireframe on every mesh's material
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.wireframe = wireframe;
      }
    });
  }, [clonedScene, wireframe]);

  // Rotate the earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  const scale = 2;
  return (
    <primitive
      ref={earthRef}
      object={clonedScene}
      scale={[scale, scale, scale]}
      position={[0, 0, 0]}
    />
  );
}

// Pre-load the model
useGLTF.preload("/assets/low_poly_planet_earth/scene.gltf");
