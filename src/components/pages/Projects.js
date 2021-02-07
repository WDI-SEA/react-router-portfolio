import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Projects extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.projects.map((project, index) =>(
            <li key={`${index}`}><Link to={`/project/${index}`} >{project.title}</Link></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Projects