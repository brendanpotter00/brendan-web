import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import WorldModel from "../threejs_models/WorldModel";
import { isMobile } from "../utils/globalVariables";
import DebugOutline from "../components_jsx/DebugOutline";
import { useAppContext } from "../context/AppContext";
import "../styles/world.css";

const World3D = () => {
  const { developerMode } = useAppContext();
  return (
    <DebugOutline>
      <div className="world3d-wrapper">
        <Canvas
          camera={{
            position: [0, 6.75, 14],
            fov: isMobile ? 85 : 60,
            near: 0.1,
            far: 1000,
          }}
          shadows
        >
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.3} />

            {/* sky/ground fill */}
            <hemisphereLight
              skyColor={0xeeeeff}
              groundColor={0x222222}
              intensity={1}
            />

            {/* main “sun” light */}
            <directionalLight
              position={[10, 10, 5]}
              intensity={1.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />

            {/* upward spotlight under the model */}
            <spotLight
              position={[0, -5, 0]}
              angle={0.4}
              penumbra={0.5}
              intensity={100}
              shadow-mapSize-width={512}
              shadow-mapSize-height={512}
            />

            <WorldModel wireframe={developerMode} />

            {/* Controls */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.4}
              autoRotate={false}
            />
          </Suspense>
        </Canvas>
      </div>
    </DebugOutline>
  );
};

export default World3D;
