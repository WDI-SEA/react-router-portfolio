import React, { Component } from 'react'

export default class Blog extends Component {

    
    render() {
        let allPost = this.props.post.map(p => {
            return (
                <div>
                    <h2>{p.title}</h2>
                    <h4>{p.body}</h4>
                    <hr />
                    <br />
                </div>
            )
        })

        return (
            <div>
                <h1>List of my Blog Post</h1>
                <hr />
                <br />
                <ul>
                    {allPost}
                </ul>
            </div>
        )
    }
}
