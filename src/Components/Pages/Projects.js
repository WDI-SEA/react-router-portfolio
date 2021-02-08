import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Projects extends Component {
    render() {
        let projectList = this.props.myProjects.map((project) => {
            return ( 
            <li key={project.id}>
                <button>
                    <Link to={`/Projects/${project.id}`} className="projectList">{project.title}</Link>
                </button>
            </li>
            )
        })
        return(
            <div>
                <h1>These are my Projects</h1>
                <ul>
                    {projectList}
                </ul>
            </div>
        )
    }
}

export default Projects;