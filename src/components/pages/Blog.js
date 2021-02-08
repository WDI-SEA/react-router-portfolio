import React, { Component } from 'react'

class Blog extends Component {
    render() {
        return(
            <div>
                <ul>
                {this.props.blogPosts.map((post) => {
                    return <li>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        </li>})}
                </ul>
            </div>
        )
    }
}

export default Blog