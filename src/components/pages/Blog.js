import React, { Component } from "react"
import Post from '../partials/Post'

export default class Blog extends Component {
    
    render () {
        let allPosts = this.props.posts.map(post => {
            return (
                <span><Post post={post} /></span>
            )
        })
        return (
            <div>
            <section className='blog-posts'>
                <h1>Blogs</h1>
               {allPosts}
            </section>
            </div>
        )
    }
}