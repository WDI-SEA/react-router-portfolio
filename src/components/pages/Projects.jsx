function Projects(props) {
    const allProjects = props.projectData.map(project => (
        <div className="project-card">
            <div className="project-title">
                <h2>{project.title}</h2>
                <small>{project.tech}</small>
            </div>
            <div className="project-body">
                <p>{project.info}</p>
            </div>
            <div className="project-img">
                <img src={project.imageUrl1} alt="" />
            </div>

        </div>
    ))

    return (
        <div className="container">
            <h1>Projects</h1>

            {allProjects}
        </div>
    );
}

export default Projects;