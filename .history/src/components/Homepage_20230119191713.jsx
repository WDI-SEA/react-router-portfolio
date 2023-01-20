import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
    const home = props.posts.map((post, index) => {
        return(
            <div key={index}>
                <h1>{post.ame}</h1>
                <p>{post.body}</p>
            </div>

        )
    })
  return (
    <div>
        <ul>
            {/* <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/about'>About</Link></li> */}


        </ul>
        
        {home}
    </div>

  
    )
}


export default Homepage