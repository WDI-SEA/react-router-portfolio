import React from 'react'

const Project = (props) => {
    return (
        <div className='post-item'>
            <h4>{props.title}</h4>
            <img src={props.image} className='project-img' />
            <p>{props.content}</p>
            <a href={props.link}>More Info</a>
        </div>
    )
}

export default Project