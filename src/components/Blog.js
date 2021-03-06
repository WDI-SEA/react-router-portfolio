import React from 'react'

const Blog = (props) => {
    console.log(props)

    const showBlog = props.blogContent.map((blog, i) => {
        return(
            <div key={i} >
            <h2>{blog.title}</h2>
            <p>{blog.story}</p>
            </div>
        )
    } )     

     

        return(
            <div>
                <h1>Incan Myth's</h1>
                {showBlog}
            </div>
            
        )
    
}

export default Blog