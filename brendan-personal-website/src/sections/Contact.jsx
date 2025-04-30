// Contact.jsx
import React from "react";
import DebugOutline from "../components_jsx/DebugOutline";
import Camping3D from "../component_models/Camping3D";
import { useAppContext } from "../context/AppContext";

const Contact = () => {
  const { developerMode } = useAppContext();
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <DebugOutline>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              <a
                href="https://www.linkedin.com/in/brendan-potter00/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Let’s connect
              </a>
            </p>
          </div>
          {/* {developerMode && <Camping3D />} */}
        </div>
      </DebugOutline>
    </section>
  );
};

export default Contact;
