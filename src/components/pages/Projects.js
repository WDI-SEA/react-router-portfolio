import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        const allProjects = this.props.projects.map((project,i) => {
            return (
                <div>
                    <h3>{project.name}</h3>
                    <h4>{project.description}</h4>
                    {project.photo_path}
                </div>
            )
        })
        return (
            <div>
                <h1>Projects</h1>
                {allProjects}
            </div>
        )
    }
}