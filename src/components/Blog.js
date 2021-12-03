import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Blog extends Component {
    render() {
        const myBlog = this.props.blogs.map((blog, i)=>{
            return <li><Link to={`/blog/${i}`}>{blog.title}</Link></li>
        })
        return (
            <div class="container">
                <h1>Favorite Things</h1>
                <u>
                    {myBlog}
                </u>
            </div>
        )
    }
}