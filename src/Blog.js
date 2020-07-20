import React from 'react';

const Blog = (props) => {
    return (
        <div>
            <h1>Paul's Blog'</h1>
            {props.posts.map((element) => 
            
               <div>
                    <h1>{element.Title}</h1>
                    <li>{element.Content}</li>
               </div>   
               
            )}
        </div>
    )
}

export default Blog;