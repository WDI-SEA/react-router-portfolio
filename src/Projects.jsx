import React from 'react'
import Project from './Project'

const Projects = props => {
    let projects = props.projects.map((project, i) => {
        return (
            <Project project={project}/>
        )
    })

    return (
        <div>
            <h1>Projects</h1>
            {projects}
        </div>
    )
}

export default Projects