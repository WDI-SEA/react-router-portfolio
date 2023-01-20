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
            <input type="text" name="blog" placeholder="Blog Title"/>
            <input type="text" name="body" placeholder="Blog Body"/>
            <button type="submit">Submit</button>
        
        
        </div>
  )
}

export default Blog