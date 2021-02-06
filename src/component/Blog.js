import React, { Component } from 'react'

class Blog extends Component{
    render(){
        let blogPosts = this.props.posts.map((post, i) => (
            <li className="pokePosts" key={`post-${i}`}>
                    <h3>
                        {post.title}
                    </h3>
                    <br></br>
                    <p>
                        {post.content}
                    </p>
            </li>
        ))
        return(
            <div>
                {blogPosts}
            </div>
        )
    }
}

export default Blog