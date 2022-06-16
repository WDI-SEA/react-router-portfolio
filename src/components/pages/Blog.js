export default function Blog(props) {
    const posts = props.posts.map((post, i)=>{
        return (
            <div key={`lulupost${i}`}>
                <h2>{post.title}</h2>
                <p>{post.post}</p>
            </div>
        )
    })
    return(
        <>
            <h1>Blog Page</h1>
            {posts}
        </>
    )
}