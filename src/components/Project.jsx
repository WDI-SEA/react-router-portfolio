export default function Project(props) {
    return (
        <div className='project-container'>
            <h2>{props.project.name}</h2>
            <hr></hr>
            <img src={`${props.project.imageUrl}`}/> <br></br>
            <a href={props.project.githubLink} target='blank'>Github Link</a>{' | '}
            <a href={props.project.deployedLink} target='blank'>Deployed Link</a>
            
        </div>
        
    )
}