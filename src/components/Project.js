const Project = props => {
    return (
        <div className='projContainer'>
            <h3 className='projName'>{props.project.name}</h3>
            <p className='projBody'>{props.project.description}</p>
            <p className='projTech'>Tech Stack: {props.project.tech_stack}</p>
            <img classnName='projImg' src={props.project.photo_path} alt={`Screenshot of ${props.project.name}`} />
            <br />
            <button><a className='projLink' href={props.project.link} target='_blank'>Deployed Link</a></button>
        </div>
    )
}

export default Project