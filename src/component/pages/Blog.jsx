

export default function Blog(props) {

    const blogs = props.posts.map(post=>{
        return (
            <div>
                <p><strong>Title:</strong> {post.title}</p>
                <p><strong>Description:</strong> {post.body}</p>
                <br></br>
            </div>
        )})
    // console.log(blogs, ">>>>")

    return (
        
            <div>
                <h1>Blog</h1>
                   {blogs}
            </div>

    )
}