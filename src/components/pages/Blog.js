import React, { Component } from 'react'


export default class Blog extends Component {
    render() {
        const allPosts = this.props.posts.map(mapPosts => {
            return <div>
                    <h1> {mapPosts.title} </h1>
                    <p> {mapPosts.body} </p>
                </div>
        })
        return(
            <div>
                <h1>Blog page</h1>
                {allPosts}
            </div>
        )
    }
}