export default function Blog(props) {

    return (
    <>
        <h1>Blog</h1>
        {props.posts.map((post, index) => {
        return (
            <div key={index}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        )
        })}
        
    </>
    );
}