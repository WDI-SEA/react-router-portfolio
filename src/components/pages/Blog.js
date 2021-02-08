import React, { Component } from 'react'

class Blog extends Component {
    render() {
        return(
            <div>
                <ul>
                {this.props.blogPosts.map((post) => {
                    return <li>{post}</li>})}
                </ul>
            </div>
        )
    }
}

export default Blog