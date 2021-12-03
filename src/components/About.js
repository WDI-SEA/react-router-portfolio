import { getAllByAltText } from "@testing-library/react";
import React, { Component } from "react";

export default class About extends Component {
  render() {
    const allSkills = this.props.skills.map((skill) => {
      // console.log('this is skill',skill)
      return (
        <li className="aboutLi">
          {skill.theImage} {skill.theSkill}
        </li>
      );
    });
    return (
      <div>
        <h1>About Me</h1>
        <p class="intro">
          Hi I am Anais, I recently graduated with a Bachelor's in Mechanical
          Engineering from <strong>Farmingdale State College</strong>. I am
          looking to use my prior knowledge and experience in Mechanical
          Engineering to pivot into a new role as a Software Engineer.
          <br />
          <br />
          After a couple years in Mechanical Engineering, I decided to take the
          leap of faith and enrolled in coding bootcamp where I learned
          languages such as <strong>HTML5, CSS and JavaScript</strong> and
          gained experience in <strong>React</strong>. I am extremely excited to
          continue in my journey of learning and growing as an engineer, and I
          know my drive and passion will bring me success in my next role.
        </p>
        <h1>Skills</h1>
        <ul className="aboutUl">{allSkills}</ul>
      </div>
    );
  }
}
