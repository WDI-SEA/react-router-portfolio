export const Projects = (props) => {
    let projectData = props.projectArray.map((project, id) => {
        return (
            <fieldset key={id}>
                <legend>
                    <a href={project.link} rel="noreferrer" target="_blank">
                        {project.name}
                    </a>
                </legend>
                <p className="project-desc">{project.desc}</p>
                {project.images.map(image => {
                    return (
                        <img src={image.url} className="screenshot" alt="screenshot"/>
                    )
                })}
                <ul className="skill-box">
                    {project.skills.map(skill => {
                        return <li>{skill}</li>
                    })}
                </ul>
            </fieldset>
        )
    })
    return (
        <div className="project-box">
            <h1>Projects</h1>
            {projectData}
        </div>
    )
}