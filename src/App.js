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
      <div className='header-container'>
        <a href={Resume} download>Download Resume!</a>
        <header>
          <h1>MICHAEL KOHLBERG</h1>
          <h2>Software Engineer</h2>
        </header>
      </div>
      <main>
        <h2 className='section-title'>Projects</h2>
        <ProjectsCarousel/>
        <Skills/>
        <About/>
      </main>
    </div>
  )
}

export default App;
