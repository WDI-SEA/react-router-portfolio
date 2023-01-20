function Blog(props) {
    let blog = props.post.map((blog, idx) => {
        return (
            <div key={`blog${idx}`}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <p>{blog.tags}</p>
            </div>
        )
    })
    return ( 
        <>
        <p>Blog</p>
        {blog}
        </>
     );
}

export default Blog;