import React, { Component } from 'react'

class Projects extends Component {
  render() {
    let projects = this.props.projects.map((p, i) => {
      return (
        <li key={i}>
          {p.projects}
          <p className="subtext">{p.desc}</p>
        </li>
      )
    })
    return (
      <div>
        <h1>Procedures</h1>
        <p>It's like pulling teeth to get a laugh out of you guys</p>
        <div className="image">
          <img src />
        </div>
        <hr />
        <h1>My Projects</h1>
        <ol>
          {projects}
        </ol>
        <hr />
        <h2>Mom, What's For Dinner?</h2>
        <p>Need help finding what to make for dinner?</p>
      </div>
    )
  }
}
export default Projects