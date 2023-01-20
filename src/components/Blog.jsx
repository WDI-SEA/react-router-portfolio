function Blog (props) {

    const postArray = props.posts.map((post, i) => {
        return (
            <div key={`key:${i}`}>
                <h3>Title: {post.title}</h3>
                <h4>Posted on: {post.date}</h4>
                <p>{post.content}</p>
                <p>Written by: {post.author}</p>
            </div>
        )
    })

    return ( 
        <>
        <h1>Blog</h1>
        {postArray}
        </>
     );
}

export default Blog ;