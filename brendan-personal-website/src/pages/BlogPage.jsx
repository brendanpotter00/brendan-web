import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DebugOutline from "../components_jsx/DebugOutline";
import "../styles/blog.css";

const BlogSection = ({ title, date, images, onImageUpload }) => {
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    onImageUpload(title, files);
  };

  return (
    <DebugOutline>
      <section className="blog-section">
        <h2 className="section-title">{title}</h2>
        <h3 className="section-date">{date}</h3>

        <div className="image-upload-container">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="image-upload-input"
          />
          <div className="image-preview-grid">
            {[...images, ...previewUrls].map((url, index) => (
              <div key={index} className="image-preview">
                <img src={url} alt={`${title} image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </DebugOutline>
  );
};

const BlogPage = () => {
  const { projectId } = useParams();
  const [sectionImages, setSectionImages] = useState({
    Ideation: [],
    Validation: [],
    Planning: [],
    Building: [],
    Feedback: [],
  });

  const handleImageUpload = (section, files) => {
    // In a real app, this would upload to a server
    // For now, we'll just store the preview URLs
    const newUrls = files.map((file) => URL.createObjectURL(file));
    setSectionImages((prev) => ({
      ...prev,
      [section]: [...prev[section], ...newUrls],
    }));
  };

  const sections = [
    { title: "Ideation", date: "2024-03-20" },
    { title: "Validation", date: "2024-03-21" },
    { title: "Planning", date: "2024-03-22" },
    { title: "Building", date: "2024-03-23" },
    { title: "Feedback", date: "2024-03-24" },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Project Blog</h1>
      {projectId && (
        <h2 className="project-subtitle">Project ID: {projectId}</h2>
      )}

      <div className="blog-content">
        {sections.map((section) => (
          <BlogSection
            key={section.title}
            title={section.title}
            date={section.date}
            images={sectionImages[section.title]}
            onImageUpload={handleImageUpload}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
