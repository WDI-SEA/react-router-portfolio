const Blog = (props) => {
    console.log(props.posts)
    const renderedPosts = props.posts.map((post) => {
        return(
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )

    })
    return(
        <div>
            <h1>Blog</h1>
            {renderedPosts}
        </div>
    )
}

export default Blog