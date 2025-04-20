// src/components/Landing.jsx
import React from "react";
import Earth3D from "../components/Earth3D";
import "../styles/landing.css";

const Landing = () => (
  <section id="landing">
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
