import React from 'react'
import { ListGroup } from 'reactstrap'

const Project = (props) => {
    let ListProjects = props.projects.map((project, i) => {
    return <p key={i}>{project}</p>
    })

    return( 
        <div className = 'project'>
            <h1>Projects</h1>
            <ListGroup>
                {ListProjects}
            </ListGroup>
            <h3>None of yer biznis</h3>
        </div>
    )
}

export default Project;