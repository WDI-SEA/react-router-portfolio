export default function Blog({ posts }) {
    const postElemnts = posts.map((post)=>{
        return (
            <div>

                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        )
        
    })
    return (
        <>
        <h1>Fun Fun Functions</h1>
        {postElemnts}
        </>
    )
}