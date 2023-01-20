import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
    const home = props.posts.map((post, index) => {
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
            <li><Link to='/'>Home</Link></li>

        </ul>
        
        Homepage</div>
    {home}

  
}

export default Homepage