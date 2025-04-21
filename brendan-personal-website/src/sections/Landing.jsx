// src/components/Landing.jsx
import React from "react";
import Earth3D from "../component_models/Earth3D";
import "../styles/landing.css";
import "../styles/global.css";
import { SHOW_PICTURES } from "../utils/globalVariables";
import DebugOutline from "../components_jsx/DebugOutline";

const Landing = () => (
  <section id="landing" className={SHOW_PICTURES ? "picture-background" : ""}>
    <Earth3D />
    <div className="hero-wrapper">
      <DebugOutline>
        <h1 className="hero-heading">
          Hello World! <br />
          My name is Brendan Potter
        </h1>
      </DebugOutline>
    </div>
  </section>
);

export default Landing;
