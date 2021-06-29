export default function Projects(props){
const projectsData = props.projectsData.map((project, ind) => {
    return( 
        <div className="inner">
        {/* <h1 className="titleHeader">Projects</h1> */}
        {/* <hr /> */}
            <div key={`project-${ind}`}>
                <h3>{project.title}</h3>
                    <p>{project.date}</p>
                    <p>{project.desc}</p>
                    <p><img className="photos" src={project.photo}/></p>
                <hr/>
            </div>
        </div>
    )
    })
    return(
        <div>
        <div>
        <h1>My Projects</h1>
        </div>
            {projectsData}
        </div>
    )
}
