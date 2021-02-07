import React, ( Component ) from 'react'

class Project extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.projects.title[this.props.match.params.id]}</h1>
        <p>{this.props.projects.about[this.props.match.params.id]}</p>
      </div>
    )
  }
}

export default Project