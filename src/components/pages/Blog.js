import React, { Component } from 'react'
import Post from '../partials/Post'

class Blog extends Component {
    render () {
        let allPosts = this.props.postsArray.map((post, i) => {
            return(<Post p={post} key={i}/>)
        })
        return (
            <>
                <h1>Bob's Blog</h1>
                {allPosts}
            </>
        )
    }
}

export default Blog