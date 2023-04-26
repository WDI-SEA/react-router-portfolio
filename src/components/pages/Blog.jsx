import blogs from "../../blogs"

export default function Blog(props) {
    const blogsArray = props.blogs.map((post) => {
        return <li>
            <h2 className="postHeader">#{post.id}-{post.title}</h2>
            <p className="postBody">{post.body}</p>
        </li>
    })
    return (
        <div>
            <h1>Blog Posts</h1>
            <div className="blog-posts">
                {blogsArray}
            </div>
        </div>
    )
}