import React from 'react'
import ludo from './ludo.png'
import yoga from './yash-yoga.png'

const Projects = props => {
    return (
        <div>
            <h1>My projects are:</h1>
                <div>
                    <h2>Ludo</h2>
                    <span role="img" aria-label="die emoji">🎲</span>
                    <p>This project was a take on the traditional Ludo boardgame. It is a front-end game using JavaScript, HTML, and CSS.</p>
                    <img src={ludo} alt="ludo" width="400"></img>
                </div>

                <div>
                    <h2>Yash-Yoga</h2>
                    <span role="img" aria-label="yoga emoji">🧘🏽‍♀️</span>
                    <p>This project was a deployed heroku web-app for creating, sharing, and following yoga routines.</p>
                    <img src={yoga} alt="yash-yoga" width="400"></img>
                </div>
        </div>
    )
}

export default Projects