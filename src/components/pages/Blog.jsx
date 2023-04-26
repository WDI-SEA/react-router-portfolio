
export default function Blog(props) {
   const listPost= props.allPost.map((post) => {
        return <li>
                    <h4>{post.title}</h4>
                    <h5>{post.author}</h5>
                    <p>{post.body}</p>
                </li>
    })
    return(
        <div>
            <h1>Blog</h1>
            <ul>
                {listPost}
            </ul>
            <h1>create post here</h1>
            <form>
                
            </form>
        </div>
    )
}