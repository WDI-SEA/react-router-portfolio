import React from 'react'
import screenshot from './projectscreenshot.png'

const Project = (props) => {
    return (
        <div>
            <h1>Here is a screenshot of one of my Projects</h1>
            <img src={screenshot} alt="Screenshot"/>
            <p>This is a screenshot of my studio Ghibli API blog, which is online but still needs lots of work to be a repectable website</p>
        </div>
    )
}

export default Project