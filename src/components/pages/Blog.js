const Blog = (props) => {
    const postsArray = props.posts.map((post, i) => {
        return <li key={`post=${i}`} ><h1>{post.title}</h1><p>{post.body}</p></li>
    })
    return (
        <>
        
            <h1>blog</h1>
            <ol>
                {postsArray}
            </ol>
        </>
    )
}
export default Blog
