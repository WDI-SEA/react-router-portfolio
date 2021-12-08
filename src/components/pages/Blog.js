import React from "react"
import Post from '../partials/Post'

function Blog(props) {
    

        let allPosts = props.posts.map(post => {
            return (
                <span><Post post={post} /></span>
            )
        })
        return (
            <div>
            <section className='blog-posts'>
                <h1>Blogs</h1>
               {allPosts}
            </section>
            </div>
        )
  
}
export default Blog