// src/components/Landing.jsx
import React from "react";
import Earth3D from "../component_models/Earth3D";
import { TypeAnimation } from "react-type-animation";
import "../styles/landing.css";
import "../styles/global.css";
import { SHOW_PICTURES } from "../utils/globalVariables";
import DebugOutline from "../components_jsx/DebugOutline";
import { useAppContext } from "../context/AppContext";

const Landing = () => {
  const { developerMode } = useAppContext();
  return (
    <section id="landing" className={SHOW_PICTURES ? "picture-background" : ""}>
      <Earth3D />
      <div className="hero-wrapper">
        <DebugOutline>
          <h1 className="hero-heading">
            {developerMode && "console.log("}
            <TypeAnimation
              // Sequence: type, pause, then delete & repeat
              sequence={[
                "",
                3000,
                "Hello world",
                2000,
                "Hello World!",
                500,
                "",
                500,
              ]}
              speed={5}
              deletionSpeed={10}
              repeat={Infinity}
              cursor={true}
              style={{ display: "inline-block" }}
            />
            {developerMode && ");"}
            <br />
            My name is Brendan Potter
          </h1>
        </DebugOutline>
      </div>
    </section>
  );
};

export default Landing;
