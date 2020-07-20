import React from 'react'

const Blog = (props) => {
    // let post = props.posts.forEach((post) => {
    //     return (
    //         <h1
    //     )
    // })


    return (
        <div>
            <h1>Here are some blog posts:</h1>
            <ul>
                {props.posts.map(item => (
                    <li key={item}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blog