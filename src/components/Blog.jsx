
const Blog = (props) => {
    const blogPost = props.blogPost.map((post, index) => {
        return(
            <div key={`blog ${index}`}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        )
    })

    return(
        <div>
            <h2>Blog</h2>
            {blogPost}
        </div>
    )
}

export default Blog