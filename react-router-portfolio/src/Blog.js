import React from 'react';

const Blog = (props) => {
    return (
      <div>
        <h1>Blog</h1>
          <ul>
          {props.blogPosts.map(post => (
            <li>
            <h2 key={post}>{post.title}</h2>
            <h4 key={post}>{post.date}</h4>
            <p key={post}>{post.content}</p>
            </li>
          ))}
          </ul>
      </div>
    )
  }

export default Blog;