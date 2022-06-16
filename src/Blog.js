import React from 'react'

export default function Blog(props) {
    const post = props.posts.map((post, i) => {
        const {title,img,body} = post
        return (<li className="center" key={`post${i}`}>
            
            {title}
           {img}
            {body}</li>
            
        
        )
    })
  return (
    <div>
        <h1>Blog</h1>
        {post}
    </div>
  )
}
