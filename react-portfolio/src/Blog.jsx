import React from 'react';


const Blog = (props) => {
    return (
        <div className = "blogPosts">
            <h1 >Blog Posts</h1>
            <hr/>

            <ul className = "blogList">
                {props.blogposts.map(item => (
                    <li key={item} className = "post">
                        <h1>{item.title}</h1>
                        <h3>{item.body}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;