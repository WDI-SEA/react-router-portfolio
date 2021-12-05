import '../../css/Projects.css'
import Project from '../Project'

const Projects = props => {
    const allProjects = props.projects.map((project, i) => {
        return (
            <Project key={i} project={project} />
        )
    })

    return (
        <div>
            <h1>My Projects</h1>
            {allProjects}
        </div>
    )
}

export default Projects