import React, { useState } from 'react';
import Post from "./Post.js";

const Blog = () => {
    const [postsContent, setPostsContent] = useState([
        {title: "I did a blog!", text: "I feel so hip now"},
        {title: "React is so fun!", text: "wheee"},
        {title: "React is sometimes fun", text: "yeah"}
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