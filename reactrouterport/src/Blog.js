import React, {useState } from 'react'


const Blog = (props) => {
console.log(props)
    return (
        <div>
            <h2> Blog ! </h2>
            <img src={props.blog.imgUrl} />
            <h3>{props.blog.name}</h3>
            <p>{props.blog.phone}</p>
            <p>{props.blog.date}</p>
                
        </div>
    )
}


export default Blog;