import React from 'react';
import Screenshot1 from './Screenshot1.JPG'
import CalmTheBomb from './CalmTheBomb.JPG'

const Projects = (props) => {

    return (
        <div>
            <ul>
                {props.projects.map(item => (
                    <li key={item}>
                        <img src={item.screenshot} alt=""/>
                        <h3>{item.info}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;