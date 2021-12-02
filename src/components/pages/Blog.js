import React, { Component } from 'react'
import Post from '../partials/Post'

export default class Blog extends Component {
    render() {
        const allPosts = this.props.posts.map(eachPost => {
            return <Post eachPost={eachPost}/>
        })

        return (
            <main>
                <h1>Blog: </h1>
                <ul>
                    {allPosts}
                </ul>
            </main>
        )
    }
}