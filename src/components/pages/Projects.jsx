import Project from '../Project'

export default function Projects(props) {
    const projects = props.projects.map((project, i) => {
        return (
            <Project project={project} key={`project-${i}`} />
        )
    })
    return (
        <div>
            <h1>Projects</h1>
            {projects}
        </div>
    )
}