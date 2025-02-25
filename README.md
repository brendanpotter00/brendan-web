# Brendan Potter's Personal Website

Welcome to my personal website repository! This project is a frontend-only, single-page application built with modern JavaScript technologies. It is designed to offer an engaging, scrollable experience that showcases my work as a Software Engineer at ForeFlight along with my projects and professional background.

## Overview

This website serves as my digital portfolio where I share insights on software engineering, showcase my projects, and highlight my professional experience. The single-page layout features distinct sections, beginning with a dynamic landing page that includes:
- A full-screen, looped video background (with a fallback black background when no video is active)
- A central low-poly Earth model rendered with Three.js that fades in
- A greeting message below the Earth that reads:  
  *"Hello world, my name is Brendan Potter"*

Additional sections include:
- **Experience:** A dedicated section highlighting my professional journey at ForeFlight and other roles, featuring reusable card components for each role.
- **Projects:** A section that showcases my projects using card components to detail each project.
- **About & Contact:** Sections providing more details about me, my work, and ways to get in touch.

## Technologies Used

- **JavaScript & React:**  
  The foundation for building a dynamic, interactive UI.
  
- **Three.js:**  
  Utilized to render the low-poly Earth model and other 3D visual elements.
  
- **Tailwind CSS:**  
  A utility-first CSS framework that enables rapid styling and ensures responsiveness across devices (from iPhone to desktop). All global styles are managed in a single file.

## Requirements & Implementation Steps

Below is a step-by-step breakdown of the requirements for the AI implementation:

1. **Single-Page Scrollable Design:**
   - Create a one-page layout where all sections (Landing, Experience, About, Projects, Contact) are arranged sequentially.
   - Ensure smooth scrolling behavior between sections.

2. **Landing Page:**
   - **Video Background:**
     - Add a full-screen video element that plays on loop.
     - Ensure that if the video is not playing, the background defaults to black.
   - **Central Low-Poly Earth Model:**
     - Integrate Three.js to render a low-poly Earth model.
     - Implement a fade-in animation effect on load.
   - **Greeting Message:**
     - Display a text element below the Earth with the message:  
       *"Hello world, my name is Brendan Potter"*

3. **Experience Section:**
   - Develop a section that highlights key professional experiences.
   - **Reusable Experience Card Component:**
     - Create a reusable card component that can be used to display individual experience items (e.g., job title, company, duration, and key achievements).
   - Ensure this section is styled consistently with the rest of the site using global styling.

4. **Projects Section:**
   - Build a section to showcase your projects.
   - **Reusable Project Card Component:**
     - Develop a card component for projects that includes details like project title, technologies used, description, and links.
   - Maintain the overall scrollable layout and consistent styling.

5. **Additional Sections (About & Contact):**
   - Create sections to provide further details about your background and ways to get in touch.
   - Ensure that these sections follow the same global styling and responsive design.

6. **Global Styling:**
   - Define all global styles in a single file (e.g., `src/styles/global.css`).
   - Set the default background color to black (when no video is active) and use white text throughout.
   - Configure Tailwind CSS for responsive design across mobile (iPhone) and desktop devices.

7. **Performance & Accessibility:**
   - Optimize video and 3D assets to ensure fast load times.
   - Ensure the website is fully responsive and accessible on all target devices.

## Repository Structure

Below is the proposed structure for the repository:

/brendan-personal-website ├── /public │ ├── index.html # Main HTML file for the React app │ ├── favicon.ico │ └── /assets # Static files (video background, images, etc.) │ ├── /src │ ├── /components # Reusable React components used across the site │ │ ├── Header.jsx # Navigation header component │ │ ├── Footer.jsx # Footer component │ │ ├── VideoBackground.jsx # Component for rendering the video background │ │ ├── EarthModel.jsx # Component that uses Three.js to render the low-poly Earth with fade-in │ │ ├── ExperienceCard.jsx # Reusable card component for individual experience items │ │ └── ProjectCard.jsx # Reusable card component for individual projects │ │ │ ├── /sections # Components for individual sections of the page │ │ ├── Landing.jsx # Landing page section (video, Earth model, greeting) │ │ ├── Experience.jsx # Experience section that uses ExperienceCard components │ │ ├── About.jsx # About section │ │ ├── Projects.jsx # Projects section that uses ProjectCard components │ │ └── Contact.jsx # Contact section │ │ │ ├── /styles # Styling files and Tailwind configuration │ │ ├── global.css # Global styles (black background, white text, etc.) │ │ └── tailwind.config.js # Tailwind CSS configuration │ │ │ └── /utils # Helper functions and utilities (e.g., animations, data formatting) │ └── helpers.js │ ├── package.json # Project dependencies and scripts └── README.md # Project documentation (this file)

/brendan-personal-website
├── public
│   ├── index.html             # Main HTML file that bootstraps the React app
│   ├── favicon.ico            # Icon for the browser tab
│   └── assets                 # Static assets (video background, images, etc.)
│
├── src
│   ├── components             # Reusable React components
│   │   ├── Header.jsx         # Navigation header component
│   │   ├── Footer.jsx         # Footer component
│   │   ├── VideoBackground.jsx# Component for rendering the looping video background
│   │   ├── EarthModel.jsx     # Component using Three.js for the low-poly Earth with fade-in
│   │   ├── ExperienceCard.jsx # Reusable card component for individual experience items
│   │   └── ProjectCard.jsx    # Reusable card component for individual projects
│   │
│   ├── sections               # Components for each distinct page section
│   │   ├── Landing.jsx        # Landing page (includes video, Earth model, greeting)
│   │   ├── Experience.jsx     # Experience section (uses ExperienceCard components)
│   │   ├── About.jsx          # About section with details about you
│   │   ├── Projects.jsx       # Projects section (uses ProjectCard components)
│   │   └── Contact.jsx        # Contact section with ways to get in touch
│   │
│   ├── styles                 # Styling files and configuration for Tailwind CSS
│   │   ├── global.css         # Global styles (e.g., black background fallback, white text)
│   │   └── tailwind.config.js # Tailwind CSS configuration file
│   │
│   └── utils                  # Helper functions and utilities
│       └── helpers.js         # Utility functions (e.g., animations, data formatting)
│
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation and overview


## Deployment

The website is deployed using **Vercel**, ensuring smooth updates and reliable performance across devices.

## Additional Topics

- **Contribution Guidelines:**  
  Contributions are welcome! Please refer to the `CONTRIBUTING.md` file (if available) for instructions on how to contribute.
  
- **Code Quality & Testing:**  
  Tools such as ESLint and Prettier are integrated to maintain code quality. Additional testing frameworks may be added as the project evolves.
