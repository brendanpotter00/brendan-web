import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl">
          {/* Add your about content here */}
          <p className="text-lg mb-4">Software Engineer at ForeFlight...</p>
        </div>
      </div>
    </section>
  );
};

export default About;
