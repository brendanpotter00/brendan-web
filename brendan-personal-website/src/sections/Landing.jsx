// src/components/Landing.jsx
import React from "react";
import Earth3D from "../component_models/Earth3D";
import "../styles/landing.css";
import "../styles/global.css";
import { SHOW_PICTURES } from "../utils/globalVariables";

const Landing = () => (
  <section id="landing" className={SHOW_PICTURES ? "picture-background" : ""}>
    <Earth3D />

    <div className="hero-wrapper">
      <h1 className="hero-heading">
        Hello World! <br />
        My name is Brendan Potter
      </h1>
    </div>
  </section>
);

export default Landing;
