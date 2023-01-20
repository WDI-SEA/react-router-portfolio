import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    const blog = props.posts.map((post, index) => {
        return(
            <div key={index}>
                <h1>{post.blog}</h1>
                <p>{post.body}</p>
            </div>
        )
    })

  return (
    <div>
        
        
        <ul>
            {blog}
        </ul>
        ///create a form to add a blog post
        <form>
            
        
        
        </div>
  )
}

export default Blog