import React, { Component } from 'react'

class Project extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.projects[this.props.match.params.id].title}</h1>
        <p style={{marginLeft: '25vw', marginRight: '25vw', fontSize: '25px'}}>{this.props.projects.[this.props.match.params.id].about}</p>
        <p><img style={{marginLeft: '25vw', marginRight: '25vw', maxHeight: '40vh', maxWidth: '40vw'}} src={this.props.projects[this.props.match.params.id].images[0]} /></p>
        <p><img style={{marginLeft: '25vw', marginRight: '25vw', maxHeight: '40vh', maxWidth: '40vw'}} src={this.props.projects[this.props.match.params.id].images[1]} /></p>
        <p><img style={{marginLeft: '25vw', marginRight: '25vw', maxHeight: '40vh', maxWidth: '40vw'}} src={this.props.projects[this.props.match.params.id].images[2]} /></p>
        <p><img style={{marginLeft: '25vw', marginRight: '25vw', maxHeight: '40vh', maxWidth: '40vw'}} src={this.props.projects[this.props.match.params.id].images[3]} /></p>
      </div>
    )
  }
}

export default Project