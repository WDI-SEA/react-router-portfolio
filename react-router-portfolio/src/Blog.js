import React from 'react';

const Blog = (props) => {
   return (
      <div>
        <h1>Blog</h1>
          <ul>
          {props.blogPosts.map((post, index) => (
            <li>
            <h2 key={index}>{post.title}</h2>
            <h4 key={index}>{post.date}</h4>
            <p key={index}>{post.content}</p>
            </li>
          ))}
          </ul>
      </div>
    )
          }

export default Blog;