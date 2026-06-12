import { Suspense, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls } from "@react-three/drei";
import PlaneModel from "../threejs_models/PlaneModel";

const reducedMotionQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);
const subscribeReducedMotion = (callback) => {
  reducedMotionQuery.addEventListener("change", callback);
  return () => reducedMotionQuery.removeEventListener("change", callback);
};
const useReducedMotion = () =>
  useSyncExternalStore(
    subscribeReducedMotion,
    () => reducedMotionQuery.matches,
  );

export default function Plane3D() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      // drei controls invalidate() on drag, so "demand" still re-renders
      // while spinning under reduced motion; "always" only when bobbing.
      frameloop={reduced ? "demand" : "always"}
      dpr={[1, 1.75]}
      camera={{ position: [0, 1.1, 4.4], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      // one-finger vertical swipes keep scrolling the page on mobile
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 4]} intensity={1.6} />
      <Suspense fallback={null}>
        <Bounds fit margin={1.15}>
          <PlaneModel bob={!reduced} />
        </Bounds>
      </Suspense>
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.9}
        minPolarAngle={0.9}
        maxPolarAngle={2.0}
      />
    </Canvas>
  );
}
