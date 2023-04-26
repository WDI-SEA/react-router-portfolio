import { Link } from "react-router-dom"

export default function Blog(props) {
    const murphyBlogs = props.blogs.map((blog, i) => {
        return (
            <div>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
            </div>
        )
    })
    return (
        <div>
            <h2>Blog</h2>
            <Link to="/blog/newblog">Create a blog for Murphy</Link>
            {murphyBlogs}
        </div>
    )
}