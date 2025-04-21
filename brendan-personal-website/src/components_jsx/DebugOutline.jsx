import React, { useMemo } from "react";
import { DEVELOPER_MODE } from "../utils/globalVariables";

export default function DebugOutline({ children }) {
  // only red, green, or blue
  const outlineColor = useMemo(() => {
    const colors = ["#ff0000", "#00ff00", "#0000ff"];
    const idx = Math.floor(Math.random() * colors.length);
    return colors[idx];
  }, []);

  if (!DEVELOPER_MODE) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        outline: `2px solid ${outlineColor}`,
        outlineOffset: "2px",
      }}
    >
      {children}
    </div>
  );
}
