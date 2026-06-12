import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CampingModel from "../threejs_models/CampingModel";

function CampfireLight({ flicker }) {
  const light = useRef();

  useFrame(() => {
    if (!light.current || !flicker) return;
    light.current.intensity = 5 + (Math.random() - 0.5) * 2;
    const hue = 0.08 + (Math.random() - 0.5) * 0.02;
    light.current.color.setHSL(hue, 1, 0.5);
  });

  return (
    <pointLight
      ref={light}
      position={[0, 2, 0]}
      intensity={5}
      distance={10}
      decay={2}
      color="#ff8c3b"
    />
  );
}

export default function Campfire3D({ flicker = true }) {
  return (
    <Canvas
      camera={{ position: [-7, 3.4, -7], fov: 50, near: 0.1, far: 1000 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: "low-power" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <hemisphereLight
          skyColor={0xeeeeff}
          groundColor={0x222222}
          intensity={0.2}
        />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <CampfireLight flicker={flicker} />
        <CampingModel />
        <OrbitControls enableZoom enablePan={false} rotateSpeed={0.4} />
      </Suspense>
    </Canvas>
  );
}
