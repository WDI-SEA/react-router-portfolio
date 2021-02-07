import React, { Component } from 'react'

class Project extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.projects[this.props.match.params.id].title}</h1>
        <p>{this.props.projects.[this.props.match.params.id].about}</p>
      </div>
    )
  }
}

export default Project