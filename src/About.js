import React from 'react'

function About(props) {
    return (
        <div>
            <h2 className="header">Want to hire me? Why wouldn't you with all of the following qualiifications.</h2>
            <ul>
                {props.skills.map((skill) => <li className="skillList" key={skill}>{skill}</li>)}
            </ul>
        </div>
    )
}

export default About;