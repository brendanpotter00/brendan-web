import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EarthModel from "../threejs_models/EarthModel";
import CursorLight from "./CursorLight";
import { useAppContext } from "../context/AppContext";
import "../styles/earth.css";

const Earth3D = () => {
  const { developerMode } = useAppContext();
  return (
    <div className="earth-container">
      <Canvas
        style={{ touchAction: "pan-y" }}
        camera={{
          position: [0, 2.5, 14],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        shadows
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.9} />
          <pointLight position={[-5, 0, 10]} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={5} castShadow />

          {/* Spotlight shining down onto the Earth */}
          <spotLight
            position={[5, 10, 5]}
            angle={0.4}
            penumbra={0.5}
            intensity={8}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <EarthModel wireframe={developerMode} />
          <CursorLight />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Earth3D;
