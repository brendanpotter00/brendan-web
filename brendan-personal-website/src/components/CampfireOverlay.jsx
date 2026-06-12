import { lazy, Suspense, useEffect, useSyncExternalStore } from "react";

const Campfire3D = lazy(() => import("../component_models/Campfire3D"));

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

export default function CampfireOverlay({ onClose }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="campfire-overlay" role="dialog" aria-label="Campfire">
      <div className="campfire-overlay__bar">
        <span>the campfire from the old site lives on here</span>
        <button type="button" onClick={onClose}>
          close [esc]
        </button>
      </div>
      <div className="campfire-overlay__canvas">
        <Suspense
          fallback={<p className="campfire-loading">lighting the fire…</p>}
        >
          <Campfire3D flicker={!reduced} />
        </Suspense>
      </div>
    </div>
  );
}
