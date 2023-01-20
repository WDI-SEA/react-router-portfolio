import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
    const about = props.posts.map((post, index) => {
        return(
            <div key={index}>
                <h1>{post.abour}</h1>
                <p>{post.body}</p>
            </div>
        )
    })
  return (
    <div>

        <ul>
        {about}
            </ul>

        About
        
        </div>
  )
}

export default About