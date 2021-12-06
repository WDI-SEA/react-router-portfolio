import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Blog = props => {
    
        const myBlog = props.blogs.map((blog, i)=>{
            return <li><Link to={`/blog/${i}`}>{blog.title}</Link></li>
        })
        return (
            <div class="container">
                <h1>Favorite Things</h1>
                <ul>
                    {myBlog}
                </ul>
            </div>
        )
}

export default Blog