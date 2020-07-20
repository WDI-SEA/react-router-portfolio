import React from 'react';
import Screenshot1 from './Screenshot1.JPG'
import CalmTheBomb from './CalmTheBomb.JPG'

const Projects = (props) => {

    return (
        <div className = "projectsPage">

        <h1>Projects</h1>
        <hr/>

            <ul>
                {props.projects.map(item => (
                    <li key={item} className = "projPic">
                        <img src= {item.screenshot.Screenshot1} />
                        <h3>{item.info}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;