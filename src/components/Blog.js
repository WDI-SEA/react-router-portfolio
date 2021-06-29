export default function Blog(props) {    
    const renderedBlogs = props.blogPosts.map((blog, idx) => {
        return(
            <div>
                <h2>{blog.name}</h2>
                <p>{blog.body}</p>
            </div>
        )
    })
    return (
        <div>
            <h3>{renderedBlogs}</h3>
        </div>
    )
}