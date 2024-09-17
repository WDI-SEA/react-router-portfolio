import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Blog(props) {
  const { posts } = props;

  return (
    <div className="blog-container">
      <div className="blog-header">
      </div>
      <div className="blog-posts grid-container">
        {posts.map((post, index) => (
          <div className="grid-item blog-post" key={index}>
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-body">{post.body}</p>
            <Link className="blog-post-link" to={`/blog/${post.id}`} state={{ post }}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
