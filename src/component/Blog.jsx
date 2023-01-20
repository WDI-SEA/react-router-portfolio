

const Blog = (props) => {
    const posts = props.posts.map((post, idx) => {
        return (
            <ul key={i}>
                blogs={post}
            </ul>
        )
    })
    return ( 
        <>
        <h1>Blog</h1>

        {posts}
        </>
     )
}
 
export default Blog;