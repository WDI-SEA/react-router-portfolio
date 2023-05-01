import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

export default function BlogPost(props) {
  const { id } = useParams();
  const post = props.posts.find((post) => post.id === id);

  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <h1 className="blog-post-title">{post.title}</h1>
        <p className="blog-post-author">By Jane Doe</p>
      </div>
      <div className="blog-post-body">
        <p>{post.body}</p>
      </div>
    </div>
  );
}
