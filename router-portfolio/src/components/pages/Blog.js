import React, { Component } from 'react'

class Blog extends Component {
    render() {
        return (
            <div>
                Hello this is the Blog page.
                {this.props.posts.map( (post, i) => {
                    return (
                        <div>
                            {post.title} {post.body}
                        </div>
                    )
                } )}
            </div>
        )
    }
}

export default Blog