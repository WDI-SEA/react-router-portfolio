import React from 'react'
import { Link } from 'react-router-dom'

const Projects = (props) => {
    const projects = props.posts.map((post, index) => {
        return(
            <div key={index}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
    })

  return (
    <div>
        u
        
        Projects
        
        
        </div>
  )
}

export default Projects