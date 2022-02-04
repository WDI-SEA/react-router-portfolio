// External Resources
import React from 'react'
// Internal Resources
import './App.css';
import Resume from './Resume-MikeKohlberg.pdf'
import ProjectsCarousel from './components/ProjectsCarousel'
import Skills from './components/Skills'
import About from './components/About'

function App() {

  return (
    <div>
      <header>
        <h1>MICHAEL KOHLBERG</h1>
        <h2>Software Engineer</h2>
      </header>
      <main>
        <h2>Projects</h2>
        <ProjectsCarousel/>
        <Skills/>
        <About/>
      </main>
      <footer>
        <a href='https://linkedin.com/in/michaelkohlberg'>LinkedIn</a>
        <a href='https://github.com/mgkdn9'>Github</a>
        <a href={Resume} download>Resume Download</a>
      </footer>
    </div>
  )
}

export default App;
