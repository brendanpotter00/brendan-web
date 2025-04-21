// src/components/DebugOutline.jsx
import React, { useMemo } from "react";
import { useAppContext } from "../context/AppContext";

export default function DebugOutline({ children }) {
  const { developerMode } = useAppContext();

  // pick one of red/green/blue once
  const outlineColor = useMemo(() => {
    const colors = ["#ff0000", "#00ff00", "#0000ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  // Always render the same <div>, just toggle the outline
  return (
    <div
      style={{
        outline: developerMode ? `2px solid ${outlineColor}` : "none",
        outlineOffset: "2px",
      }}
    >
      {children}
    </div>
  );
}
