import React, { useRef, useEffect, useState } from "react";
import "../styles/about.css";
import "../styles/global.css";
import World3D from "../component_models/World3D";
import DebugOutline from "../components_jsx/DebugOutline";
import ExperienceBackground from "../component_models/ExperienceBackgound";
import { useAppContext } from "../context/AppContext";

export default function About() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { developerMode } = useAppContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={isVisible ? "about visible" : "about"}
    >
      <div className="about_content">
        <DebugOutline>
          <h2 className="about_heading">About Me</h2>
          <div className="about_text">
            <p>
              I’m a Full‑Stack Software Engineer at ForeFlight (a Boeing
              Company), specializing in React, TypeScript, and Three.js. I love
              crafting intuitive, high‑performance user experiences.
            </p>
            <p>
              Outside of code you’ll find me studying for my private pilot’s
              license, exploring 3D graphics, or planning my next flight in a
              Cessna 172.
            </p>
          </div>
        </DebugOutline>
      </div>
      <div className="about_content">
        {developerMode && <ExperienceBackground />}

        <World3D />
      </div>
    </section>
  );
}
