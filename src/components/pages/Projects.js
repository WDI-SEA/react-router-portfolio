import project1 from '../partials/project-1.png'
import project2 from '../partials/project-2.png'
function Projects() {
    return (
      <>
        <h2>Projects</h2>
        <img src={project1} alt="project1" width="800" />
        <h3>Project 1 - Mario Jump</h3>
        <p>- Mario is jumping and pass obstacles</p>
        <img src={project2} alt="project2" width="800" />
        <h3>Project 2 - Free to Game</h3>
        <p>- Built a website that shows free games sorted by genres and platforms</p>
      </>
    );
  }
  
  export default Projects;