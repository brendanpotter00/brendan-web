import { lazy, Suspense, useState } from "react";

const CampfireOverlay = lazy(() => import("./CampfireOverlay"));

export default function Footer() {
  const [fireLit, setFireLit] = useState(false);

  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Brendan Potter</span>
      <button type="button" onClick={() => setFireLit(true)}>
        sit by the fire 🔥
      </button>
      {fireLit && (
        <Suspense
          fallback={
            <div className="campfire-overlay">
              <p className="campfire-loading">lighting the fire…</p>
            </div>
          }
        >
          <CampfireOverlay onClose={() => setFireLit(false)} />
        </Suspense>
      )}
    </footer>
  );
}
