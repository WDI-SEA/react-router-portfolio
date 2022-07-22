// External Resources
import React from "react";
import Button from "react-bootstrap/Button";
// Internal Resources
import "./App.css";
import Resume from "./Resume-MikeKohlberg-2022103.pdf";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <div>
      <div className="header-container">
        <a href={Resume} download>
          Download Resume
        </a>
        <Button id="callToActionBtn" variant="primary" size="lg">Email Me</Button>
        <header>
          <h1>MICHAELA KOHLBERG</h1>
          <h2>Software Engineer</h2>
        </header>
      </div>
      <main>
        <h2 className="section-title">Projects</h2>
        <ProjectsCarousel />
        <Skills />
        <About />
      </main>
    </div>
  );
}

export default App;
