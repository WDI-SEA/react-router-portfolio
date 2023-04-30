import React from 'react';
import { posts } from '../posts';
import { Link } from "react-router-dom";



export default function Blog(props) {
  const { posts } = props;

  return (
    <div >
      <h1 >My Blogs</h1>
      {posts.map((post, index) => (
        <div key={index} style={post}>
          <h2 >{post.title}</h2>
          <p >{post.body}</p>
        </div>
      ))}
    </div>
  );
}
