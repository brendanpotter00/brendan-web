// src/components_jsx/Camping3D.jsx
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  StatsGl,
  OrbitControls,
  Sky as SkyImpl,
  Clouds,
  Cloud,
} from "@react-three/drei";
import { useControls } from "leva";
import { useAppContext } from "../context/AppContext";
import { isMobile } from "../utils/globalVariables";
import CampingModel from "../threejs_models/CampingModel";
import DebugOutline from "../components_jsx/DebugOutline";
import "../styles/world.css";

function CampfireLight() {
  const light = useRef();
  const baseIntensity = 5;
  const flickerAmp = 2;
  const { camera } = useThree();

  //   useFrame(() => {
  //     console.log(
  //       `Camera pos → x:${camera.position.x.toFixed(2)}, y:${camera.position.y.toFixed(2)}, z:${camera.position.z.toFixed(2)}`
  //     );
  //     console.log(
  //       `Camera rot → x:${camera.rotation.x.toFixed(2)}, y:${camera.rotation.y.toFixed(2)}, z:${camera.rotation.z.toFixed(2)}`
  //     );
  //   });

  useFrame(() => {
    // wildly random intensity each frame
    light.current.intensity =
      baseIntensity + (Math.random() - 0.5) * flickerAmp;
    // slight hue shift around orange
    const h = 0.08 + (Math.random() - 0.5) * 0.02;
    light.current.color.setHSL(h, 1, 0.5);
  });

  return (
    <pointLight
      ref={light}
      position={[0, 2, 0]}
      distance={10}
      decay={2}
      castShadow
      shadow-mapSize-width={256}
      shadow-mapSize-height={256}
    />
  );
}

export default function Camping3D() {
  const { developerMode } = useAppContext();

  return (
    <DebugOutline>
      <div className="world3d-wrapper">
        <Canvas
          camera={{
            position: [-2.5, -0.5, -2.5],
            fov: isMobile ? 85 : 50,
            near: 0.1,
            far: 1000,
          }}
        >
          <Suspense fallback={null}>
            {/* Debug overlay */}
            <StatsGl />

            {/* Fill lights */}
            <ambientLight intensity={0.3} />
            <hemisphereLight
              skyColor={0xeeeeff}
              groundColor={0x222222}
              intensity={0.2}
            />

            {/* Directional “sun” */}
            <directionalLight
              position={[10, 10, 5]}
              intensity={0.5}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />

            {/* Spotlight under model */}
            <spotLight
              position={[0, -5, 0]}
              angle={0.4}
              penumbra={0.5}
              intensity={100}
              castShadow
              shadow-mapSize-width={512}
              shadow-mapSize-height={512}
            />

            {/* 🌟 Spastic campfire light */}
            <CampfireLight />

            {/* Your model */}
            <CampingModel wireframe={developerMode} />

            {/* Orbit controls */}
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              rotateSpeed={0.4}
              autoRotate={false}
            />
          </Suspense>
        </Canvas>
      </div>
    </DebugOutline>
  );
}
