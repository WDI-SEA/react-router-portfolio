import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Projects extends Component {
    render() {
        let projectDetails = this.props.projectDetails.map((project, i) => (
            <li key={`project-${i}`} className="projects"><img src={project.img} /> <h3 className="project_h3"><Link to={`/project/${project.id}`}>{project.name}</Link></h3> <p>{project.shortDesc}</p></li>
        ))
        return (
            <section>
                <h1>Hal Apenyo Projects</h1>
                <ul>
                    {projectDetails}
                </ul>
            </section>
        )
    }
}

export default Projects