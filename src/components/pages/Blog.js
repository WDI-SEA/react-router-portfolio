import React from "react";

export default function Blog(props) {
  const posts = props.posts.map((post, i) => {
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{[post.body]}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>Why does every dev have to have a Blog</h1>
      {posts}
    </div>
  );
}
