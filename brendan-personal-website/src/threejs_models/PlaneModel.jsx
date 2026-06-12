import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";

const MODEL_URL = "/assets/low_poly_plane/scene.gltf";

export default function PlaneModel({ bob = true }) {
  const group = useRef();
  const { scene } = useGLTF(MODEL_URL);

  useFrame(({ clock }) => {
    if (!bob || !group.current) return;
    const t = clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 1.2) * 0.08;
    group.current.rotation.z = Math.sin(t * 0.7) * 0.05;
  });

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} rotation={[0, Math.PI / 4.5, 0]} />
      </Center>
    </group>
  );
}

// Module-level preload inside the lazy chunk: the gltf fetch starts the
// moment this chunk loads, never before first paint.
useGLTF.preload(MODEL_URL);
