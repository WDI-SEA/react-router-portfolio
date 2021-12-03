import React, { Component } from "react"
import { Link } from "react-router-dom"
import Post from '../partials/Post'

export default class Blog extends Component {
    
    render () {
        // console.log('post', this.props.posts)
        let allPosts = this.props.posts.map(post => {
            return (
                <span><Post post={post} /></span>
            )
        })
          

        return (
            <div>
            <section className='allPosts'>
                <h1>Blogs! 🌸</h1>
               {allPosts}
            </section>
            </div>
        )
    }
}
