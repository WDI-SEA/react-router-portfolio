import React, { Component } from "react"
import pic from "../../Screenshot 2021-12-02 175707.png"

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <img src={pic}></img>
        <p>Hey this is a pic of my first project, looks cool right? There's a Taco Bell sound effect when you get hit.</p>
      </div>
    )
  }
}

