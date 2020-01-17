import React from 'react'
import BlogPost from './BlogPost'
import Grid from '@material-ui/core/Grid'


const Blog = props => {

let blogPosts = props.posts.map((post, i) => {
    return (
        <BlogPost key={i} post={post} index={i}/>
    )
})
    return (
        <div>
            <h1>{props.name.first}'s Blog</h1>
            {blogPosts}
        </div>
    )
}

export default Blog