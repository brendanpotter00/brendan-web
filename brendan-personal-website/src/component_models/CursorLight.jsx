import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export default function CursorLight() {
  const light = useRef();
  const { camera } = useThree();
  const [mouse, setMouse] = useState([0, 0]);

  useEffect(() => {
    const onMove = (e) => {
      setMouse([
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ]);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    if (!light.current) return;

    // compute base position on z=0 plane
    const vec = new Vector3(mouse[0], mouse[1], 0.5).unproject(camera);
    const dir = vec.sub(camera.position).normalize();
    const distanceToPlane = -camera.position.z / dir.z;
    const pos = camera.position
      .clone()
      .add(dir.multiplyScalar(distanceToPlane));

    // pull pointer closer to camera when near screen center
    const ndcDist = Math.hypot(mouse[0], mouse[1]);
    const clamped = Math.min(1, ndcDist);
    const maxOffset = 5; // adjust strength here
    const zOffset = (1 - clamped) * maxOffset;
    pos.z += zOffset;

    light.current.position.copy(pos);
  });

  return (
    <pointLight
      ref={light}
      color="skyblue"
      intensity={5}
      distance={10}
      decay={2}
    />
  );
}
