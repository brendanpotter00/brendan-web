import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Header from "./components_jsx/Header";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Landing />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </div>
          }
        />
        <Route path="/blog/:projectId?" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
