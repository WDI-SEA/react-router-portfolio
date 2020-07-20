import React from 'react'
import Article from './Article'

    function Blog(props) {

        let details = props.posts.map((article) => {
            return  (
                <Article key={Math.random()} article = {article} />
            )
        })

        
     
        return (
            <div>
                <h1>Welcome to myBlog</h1>
                {details}
            </div>
        )
    }

export default Blog