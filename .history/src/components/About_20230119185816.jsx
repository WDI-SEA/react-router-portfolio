import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
    const about = props.posts.map((post, index) => {
        return(
            <div key={index}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
    })
  return (
    <div>

        <ul>
            
        About
        {about}
        
        </div>
  )
}

export default About