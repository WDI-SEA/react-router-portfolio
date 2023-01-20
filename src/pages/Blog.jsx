// import Post from "./components/Post"

export default function Blog(props){
    const posts = props.posts.map((post, idx) => {
        return(
            <div key={`post${idx}`}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )
    })
    return(
        <div className='blog'>
            <h2>Blog</h2>
            {posts}
        </div>
    )
}