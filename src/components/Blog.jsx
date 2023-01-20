const Blog = (props) => {
    return (
        <div>
            {props.posts.map((posts, idx)=>{
                return(
                <div>
                    <h1>{posts.title}</h1>
                    <p>{posts.body}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Blog