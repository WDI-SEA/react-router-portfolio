import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="aboutContainer">
                <div className="about">
                    <h1>About Me</h1>
                    <p>Just another full-stack developer / graphic designer.</p>
                    <p>Expertise in graphic design includes producing, branding, and managing with corporate identities, vector/pixel graphics, photo editing, UI/UX design, printed/web deployed materials, and advertisement campaigns. Proficient in delivering visual languages as well as logical mapping in developments.</p>
                    <p>Most importantly, living another happy day.</p>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="mailto:kys3923@gmail.com"><i className="far fa-envelope"></i> mail me</a></li>
                        <li><a href="https://drive.google.com/file/d/1ludrrUAsFFopnH-OxWjIMLWrGdu_Vb29/view?usp=sharing" target="_blank"><i className="fas fa-file-alt"></i> view resume</a></li>
                        <li><a href="https://www.linkedin.com/in/youngsang-kim/" target="_blank"><i className="fab fa-linkedin"></i> linkedIn</a></li>
                        <li><a href="https://github.com/kys3923" target="_blank"><i className="fab fa-github"></i> github</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default About

