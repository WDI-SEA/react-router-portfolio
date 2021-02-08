import React, { Component } from 'react';


class Blog extends Component {


    render(){
        
        const showBlog = this.props.posts[0].map((post, index) => {
            console.log(`SEEEE TITLE HERE!! ${this.props.posts}`)
            return (
                <div key={`key is ${index}`}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )
        })
        // console.log(`Hellloooo ${this.props.posts}`)
        
        return(
            <div>
                <h1>
                    Blog: A page displaying a few blog posts
                </h1>
                {showBlog}
            </div>
        )
    }
}

export default Blog
