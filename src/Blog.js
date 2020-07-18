import React, { useState } from 'react';
import Post from "./Post.js";

const Blog = () => {
    const [postsContent, setPostsContent] = useState([
        {title: "first post", text: "omg look I did a blog"},
        {title: "second post", text: "React is so fun"},
        {title: "third post", text: "React is sometimes fun"}
    ])
    return (
        <div>
            <h2>Read this Blog!</h2>
            {postsContent.map(post => (
                <Post postInfo={post} />
            ))}
        </div>
    )
}
export default Blog;