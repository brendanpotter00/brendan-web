import React from "react";
import DebugOutline from "../components_jsx/DebugOutline";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <DebugOutline>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
          <div className="max-w-2xl mx-auto">
            {/* Add your contact information here */}
            <p className="text-lg mb-4">Let's connect!</p>
          </div>
        </div>
      </DebugOutline>
    </section>
  );
};

export default Contact;
