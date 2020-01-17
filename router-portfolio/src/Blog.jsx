import React from 'react'
import { ListGroup } from 'reactstrap'

const Blog = (props) => {
    let blogPosts = props.blogs.map((blog, i) => {
        return <p key={i}>{blog}</p>
    })

    return( 
        <div className = 'blog'>
            <h1>Blog</h1>
            <ListGroup>
                {blogPosts}
            </ListGroup>
            <h3>None of yer biznis</h3>
        </div>
    )
}

export default Blog;