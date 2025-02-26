# Brendan Potter's Personal Website

Welcome to my personal website repository! This project is a frontend-only, single-page application built with modern JavaScript technologies. It is designed to offer an engaging, scrollable experience that showcases my work as a Software Engineer at ForeFlight along with my projects and professional background.

## Overview

This website serves as my digital portfolio where I share insights on software engineering, showcase my projects, and highlight my professional experience. The single-page layout features distinct sections in the following order:
- **Landing:** Featuring a central low-poly Earth model rendered with Three.js that fades in and a greeting message:  
  *"Hello world, my name is Brendan Potter"*
- **About:** Providing more details about me and my background.
- **Experience:** Highlighting my professional journey at ForeFlight and other roles with reusable card components.
- **Projects:** Showcasing my projects with card components that detail each project.
- **Contact:** Offering ways for visitors to get in touch.

## Technologies Used

- **JavaScript & React:**  
  The foundation for building a dynamic, interactive UI.
  
- **Three.js:**  
  Utilized to render the low-poly Earth model and other 3D visual elements.
  
- **Tailwind CSS:**  
  A utility-first CSS framework that enables rapid styling and ensures responsiveness across devices (from iPhone to desktop). Global styles are managed in a single file.

## Requirements & Implementation Steps

Below is a step-by-step breakdown of the requirements for the AI implementation:

1. **Single-Page Scrollable Design:**
   - Create a one-page layout where all sections (Landing, About, Experience, Projects, Contact) are arranged sequentially.
   - Ensure smooth scrolling behavior between sections.

2. **Landing Page:**
   - **Central Low-Poly Earth Model:**
     - Integrate Three.js to render a low-poly Earth model.
     - Implement a fade-in animation effect on load.
   - **Greeting Message:**
     - Display a text element below the Earth with the message:  
       *"Hello world, my name is Brendan Potter"*

3. **About Section:**
   - Develop an "About" section that provides background information about you.
   - Ensure consistent styling with the rest of the site using global styles.

4. **Experience Section:**
   - Develop a section that highlights key professional experiences.
   - **Reusable Experience Card Component:**
     - Create a reusable card component that can be used to display individual experience items (e.g., job title, company, duration, and key achievements).
   - Style this section consistently with the global styling.

5. **Projects Section:**
   - Build a section to showcase your projects.
   - **Reusable Project Card Component:**
     - Develop a card component for projects that includes details like project title, technologies used, description, and links.
   - Maintain the overall scrollable layout and consistent styling.

6. **Contact Section:**
   - Create a section to provide visitors with ways to get in touch.
   - Ensure that this section follows the same styling and responsive design as the rest of the site.

7. **Global Styling:**
   - Define all global styles in a single file (e.g., `src/styles/global.css`).
   - Set the default background color (for example, black) and use a consistent text color throughout the site.
   - Configure Tailwind CSS for responsive design across mobile (iPhone) and desktop devices.

8. **Performance & Accessibility:**
   - Optimize assets to ensure fast load times.
   - Ensure the website is fully responsive and accessible on all target devices.

## Optional Features

- **Optional: Video Background**
  - If desired, add a full-screen video element that plays on loop as a background for the landing page.
  - When not active, the background should default to the standard color (e.g., black).
  - This feature can be implemented later as an enhancement without affecting the core functionality.

## Repository Structure

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
