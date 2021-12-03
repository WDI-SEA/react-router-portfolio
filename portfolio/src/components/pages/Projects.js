import React, { Component } from 'react'
import Project from '../partials/Project'

export default class Projects extends Component {
    render() {
        let allProjects = this.props.projects.map(project => {
            return (
                <Project
                    title={project.title}
                    img={project.img}
                    stack={project.stack}
                    description={project.description}
                />
            )
        })
        return (
            <main>
                <div className="title">    
                    <h1>Projects</h1>
                </div>
                <div className="projectMain">
                    {allProjects}
                </div>
            </main>
        )
    }
}