const Project = props => {
    return (
        <div className='projContainer'>
            <h3 className='projName'>{props.project.name}</h3>
            <small>{props.project.date}</small>
            {/* <p className='projBody'>{props.project.description}</p> */}
            <div class="img__wrap">
                <img class="img__img" src={props.project.photo_path} />
                <p class="img__description">Tech Stack: {props.project.tech_stack}</p>
                <p className='projBody img__description'>{props.project.description}</p>
            </div>
            {/* <p className='projTech'>Tech Stack: {props.project.tech_stack}</p>
            <img classnName='projImg' src={props.project.photo_path} alt={`Screenshot of ${props.project.name}`} /> */}
            <br />
            <button><a className='projLink' href={props.project.link} target='_blank'>Deployed Link</a></button>
        </div>
    )
}

export default Project