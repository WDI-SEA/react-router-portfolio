import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        const allProjects = this.props.projects.map((project, i) => {
            return (
                <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <small>Tech Stack: {project.tech_stack}</small>
                    <br />
                    <img src={project.photo_path} alt='screenshot of app'/>
                    <br />
                    <a href={project.link}>Deployed Link</a>
                </div>
            )
        })
        return (
            <div>
                <h1>My Projects</h1>
                {allProjects}
            </div>
        )
    }
}
