import { lazy, Suspense, useEffect, useState } from "react";

const Plane3D = lazy(() => import("../component_models/Plane3D"));

function Placeholder() {
  return <div className="plane-slot__placeholder" aria-hidden="true" />;
}

// Defers the three.js chunk until the browser is idle so the text paints
// first; the placeholder keeps the layout stable meanwhile.
export default function PlaneSlot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setReady(true), { timeout: 2000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="plane-slot">
      {ready ? (
        <Suspense fallback={<Placeholder />}>
          <div className="plane-slot__canvas">
            <Plane3D />
          </div>
        </Suspense>
      ) : (
        <Placeholder />
      )}
    </div>
  );
}
