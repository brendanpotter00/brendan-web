import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  StatsGl,
  CameraControls,
  Sky as SkyImpl,
  Clouds,
  Cloud,
} from "@react-three/drei";
import { useControls } from "leva";

export default function ExperienceBackground() {
  return (
    <Canvas
      className="experience-bg-canvas"
      style={{ width: "100%", height: "100vh" }}
      camera={{ position: [0, 20, 50], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Debug overlay */}
      <StatsGl />

      {/* Animated sky & clouds scene */}
      <BackgroundScene />

      {/* Optional camera controls (disabled interaction) */}
      <CameraControls enablePan={false} enableZoom={false} makeDefault />
    </Canvas>
  );
}

function BackgroundScene() {
  const sceneRef = useRef<THREE.Group>(null!);
  const cloudRef = useRef<THREE.Object3D>(null!);

  // Leva controls for sky configuration
  const { distance, sunPosition, inclination, azimuth } = useControls("Sky", {
    distance: { value: 800, min: 100, max: 2000, step: 50 },
    sunPosition: {
      value: [0, 1, 0],
      joystick: "invertY",
    },
    inclination: { value: 0, min: 0, max: 1, step: 0.01 },
    azimuth: { value: 0.25, min: 0, max: 1, step: 0.01 },
  });

  // Leva controls for cloud animation
  const { speed, segments, volume, fade, x, y, z, range, color } = useControls(
    "Clouds",
    {
      speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
      segments: { value: 20, min: 1, max: 80, step: 1 },
      volume: { value: 6, min: 0, max: 100, step: 0.1 },
      fade: { value: 10, min: 0, max: 400, step: 1 },
      x: { value: 6, min: 0, max: 100, step: 1 },
      y: { value: 1, min: 0, max: 100, step: 1 },
      z: { value: 1, min: 0, max: 100, step: 1 },
      range: { value: 400, min: 0, max: 1000, step: 10 },
      color: { value: "white" },
    }
  );

  useFrame((state, delta) => {
    // gently rotate the group
    sceneRef.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
    sceneRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
    // rotate first cloud instance
    cloudRef.current.rotation.y -= delta * speed;
  });

  return (
    <>
      {/* Sky dome inside far plane */}
      <SkyImpl
        distance={distance}
        sunPosition={sunPosition as [number, number, number]}
        inclination={inclination}
        azimuth={azimuth}
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[100, 100, 100]} intensity={1} />

      {/* Group for cloud rotation */}
      <group ref={sceneRef}>
        <Clouds
          texture="/assets/cloud.png"
          material={THREE.MeshLambertMaterial}
          limit={200}
          range={range}
          frustumCulled={false}
        >
          <Cloud
            ref={cloudRef}
            seed={1}
            segments={segments}
            bounds={[x, y, z]}
            volume={volume}
            fade={fade}
            color={color}
          />
          <Cloud
            seed={2}
            segments={segments}
            bounds={[x, y, z]}
            volume={volume}
            fade={fade}
            color={color}
            position={[15, 0, 0]}
          />
          <Cloud
            seed={3}
            segments={segments}
            bounds={[x, y, z]}
            volume={volume}
            fade={fade}
            color={color}
            position={[-15, 0, 0]}
          />
        </Clouds>
      </group>
    </>
  );
}
