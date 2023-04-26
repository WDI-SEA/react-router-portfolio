import { Link } from "react-router-dom"
import BlogForm from "./partials/BlogForm"

export default function Blog(props) {
    const blogPosts = props.posts.map((post,i) => {
        return(
            <h3>
                <Link to={`/blog/${post.id}`}>
                    {post.title}
                </Link>
            </h3>
        )
    })

    const stateBlogs = props.blogs.map((blog, i) => {
        return(
            <h3>
                <Link to={`/blog/${blog.id}`}>
                    {blog.title}
                </Link>
            </h3>
        )
    })
    return(
        <>
            <h2>Blogs</h2>
            <BlogForm 
                posts={props.posts}
                blogs={props.blogs}
                setBlogs={props.setBlogs}
                newBlog={props.newBlog}
                setNewBlog={props.setNewBlog}
            />
            {props.blogs.length ? stateBlogs : null}
            {blogPosts}
        </>
    )
}