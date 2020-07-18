import React from 'react'

function Projects(props) {
    return (
        <div>
            <h2 className="header">Want to know what I've been up to? Check out my most recent projects below.</h2>
            <ul>
                {props.projects.map((project, i) => <li key={i}><h1 className="header">{project.title}</h1><img className="projectImg" src={project.img} /> <p className="header">Description: {project.description}</p></li>)}
            </ul>
            <h2 className="header">Other Notable projects include:</h2>
            <ul>
                {props.works.map((work, i) => <li key={i}><li className="header skillList">{work}</li></li>)}    
            </ul>
        </div>
    )
}

export default Projects;