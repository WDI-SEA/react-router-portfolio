import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    const allProjects = this.props.projects.map((project) => {
      return (
        <li className='projectsLi'>
          {project.name} {project.description} {project.Image}
        </li>
      );
    });
    return (
      <div>
        <h1>Projects</h1>
        <ul>{allProjects}</ul>
      </div>
    );
  }
}
