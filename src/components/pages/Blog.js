import React, { Component } from "react"

export default class Blog extends Component {
    render() {
        const blogPosts = this.props.posts.map(posts=>{
            return (
              <li className="blog">
                {posts} <br></br> -Author guy
              </li>
            )
        })
        return (
            <div>
             <h1>Blog</h1>
            <ul>
                {blogPosts}
            </ul>
            </div>
        )
        }
    }