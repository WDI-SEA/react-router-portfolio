import React from 'react';


const Blog = (props) => {
    return (
        <div>
            <br/>
            <h1 className = "blogPosts">Blog Posts</h1>
            <hr/>

            <ul className = "blogList">
                {props.blogposts.map(item => (
                    <li key={item}>
                        <h1>{item.title}</h1>
                        <h3>{item.body}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;