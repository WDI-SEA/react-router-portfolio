import React from 'react';
import pinball from './img_assets/pinball.png'
import planeswalker from './img_assets/planeswalker.png'

class Projects extends React.Component {
  render () {
    return (
      <div className='main_projects_container'>
        <h1> Projects and Works</h1>
        <h3>Projekt Pinball Dev</h3>
        <img className="borderImg" src={pinball} alt="pinball project" />
        <a href="https://sameghosts.github.io/ProjektPinballDev/">
        <p>Vanilla Javascript Pinball application using classes and a physics engine from scratch. In Progress.</p>
        </a>
        <h3>Planeswalker Portal</h3>
        <img className="borderImg" src={planeswalker} alt="pinball project" />
        <a href="https://planeswalkerportal11221.herokuapp.com/">
        <p>Full-stack magic the gathering card tracker and deck building application. In Progress.</p>
        </a>
      </div>
    )
  }
};

export default Projects;