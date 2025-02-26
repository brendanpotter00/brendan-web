import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EarthModel from "./EarthModel";

const Earth3D = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen border-4 border-red-500">
      <Canvas
        camera={{
          position: [0, 2.5, 14],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.9} />
          <pointLight position={[-5, 0, 10]} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <EarthModel />

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
