import React, {Component} from 'react'
import {Link} from 'react-router-dom' 


class Blog extends Component {
    render () {
        let displayBlog = this.props.posts.map((post, i) => {
            // console.log(post.img.src)
            return (
                <div key={`key is ${i}`}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <img src={post.img}alt = {post.alt} />
                </div>
            )
        })
        return (
            <div>
              <h1>Welcome to my Blog!!</h1>
              {displayBlog}
             
            </div>
        )
    }
}

export default Blog