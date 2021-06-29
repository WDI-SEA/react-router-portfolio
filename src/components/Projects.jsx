export const Projects = (props) => {
    let projectData = props.projectArray.map((e, id) => {
        return (
            <fieldset>
                <legend>
                    <a href={e.link}>
                        {e.name}
                    </a>
                </legend>
                <p className="project-desc">{e.desc}</p>
                {e.images.map(image => {
                    return (
                        <img src={image.url} className="screenshot" alt="screenshot"/>
                    )
                })}
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