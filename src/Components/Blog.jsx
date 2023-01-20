import Comments from "./Comments"

export default function Blog(props){
    const blog = props.posts.map((post,idx)=>{
        return(
            <div key={`post${idx}`}>
                <h1>{post.title}</h1>
                <h2>By: {post.author}</h2>
                <p>{post.body}</p>
                <Comments 
                    comments = {post.comments}
                    // key={`${post.title}${idx}`}
                />
            </div>
            )
    })
    return(
        <>
            {blog}
        </>
    )
}