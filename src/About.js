import React from 'react';

const About = () => {
    return(
        <div className="aboutpage">
            <h1> About Me: </h1>

            <img src= "https://i.imgur.com/I1owp56.jpg" alt=" me"/>
            <p> I'm a developer who went through the General Assembly Software Engineering Immersive program! I have experience in:</p>
            <ul>
                <li>HTML, CSS, SAAS</li>
                <li>JavaScript, JQuery, PostgreSQL</li>
                <li>MongoDB, Ruby, Ruby on Rails</li>
                <li>ReactJS, AngularJS</li>
                <li>Wordpress, Git, Github</li>
                <li>Agile/Scrum</li>
            </ul>
            <p>Prior to software engineering, I had experience with an asset management tech firm and a business rotational program with Macy's.</p>
        </div>
    )
}

export default About;