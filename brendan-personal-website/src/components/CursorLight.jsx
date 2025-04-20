import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export default function CursorLight() {
  const light = useRef();
  const { camera } = useThree();
  const [mouse, setMouse] = useState([0, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse([
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!light.current) return;
    const vec = new Vector3(mouse[0], mouse[1], 0.5).unproject(camera);
    const dir = vec.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
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
