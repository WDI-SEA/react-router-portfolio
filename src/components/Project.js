const Project = props => {
    return (
        <div>
            <h3>{props.project.name}</h3>
            <p>{props.project.description}</p>
            <small>Tech Stack: {props.project.tech_stack}</small>
            <br />
            <img src={props.project.photo_path} alt='screenshot of app' />
            <br />
            <a href={props.project.link}>Deployed Link</a>
        </div>
    )
}

export default Project