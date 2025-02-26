import React from "react";
import Earth3D from "../components/Earth3D";

const Landing = () => {
  return (
    <section
      id="landing"
      className="relative min-h-screen fade-in"
      style={{ opacity: 0, animationDelay: "1s" }}
    >
      <Earth3D />
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen pb-80">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Hello World! <br /> My name is Brendan Potter
        </h1>
      </div>
    </section>
  );
};

export default Landing;
