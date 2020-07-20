import React from 'react';
import './App.css';

const Blog = (props) => {
    return (
        <div class="allPosts">
            {props.posts.map(post => (
                <div class="eachPost">
                    <h3 key={post.title}>{post.title}</h3>
                    <h4 key={post.body}>{post.body}</h4>
                </div>
                
            ))}
        </div>
    )
}

export default Blog;