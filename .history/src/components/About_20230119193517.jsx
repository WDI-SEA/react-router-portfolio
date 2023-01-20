import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
    const about = props.posts.map((post, index) => {
        return(
            <div key={index}>
                <h1>{post.about}</h1>
                <p>{post.body}</p>
            </div>
        )
    })
  return (
    <div>

        <ul>
        {about}
            </ul>

        <h3>
             Resume 
        </h3>
             <button>DownLoad Res</button>
        
        </div>
  )
}

export default About