import "./styles/global.css";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Header from "./components_jsx/Header";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
