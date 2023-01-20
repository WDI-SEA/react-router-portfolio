import React from 'react'
import { Link } from 'react-router-dom'

const Projects = (props) => {
    const projects = props.posts.map((post, index) => {
        return(
            <div key={index}>
                <h1>{post.projects}</h1>
                <p>{post.body}</p>
            </div>
        )
    })

  return (
    <div>
        <ul>
            <li>
                {projects}
            </li>
        </ul>
        
       <h1>
              Project 1
       </h1>
       <h1>
              Project 2
       </h1>
       <h1>
              Project 3
       </h1>

        
        
        </div>
  )
}

export default Projects