export default function Blog(props) {
    const renderPosts = props.posts.map((post, index) => {
        return (
            <div key={index}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>  
        )
    })
    
    return (   
        <div>
            {renderPosts}
        </div>
    )
}