
const Projects = (props) => {
    const projects = props.projects.map((project, index) => {
        return(
            <div key={`project ${index}`}>
                <h4>{project.title}</h4>
                <img src={project.image} alt="project" />
                <p>{project.body}</p>
            </div>
        )
    })
    return(
        <div>
            {projects}
        </div>
    )
}

export default Projects