import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    const blog = props.posts.map((post, index) => {
        return(
            <div key={index}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
    })

  return (
    <div>
        
        Blog
        <ul>
            {blog}
        </ul>
        
        
        </div>
  )
}

export default Blog