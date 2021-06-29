export const Projects = (props) => {
    let projectData = props.projectArray.map((e, id) => {
        return (
            <fieldset>
                <legend>{e.name}</legend>
                <p>{e.desc}</p>
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