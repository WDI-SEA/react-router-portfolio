export default function Blog(props) {
    const postArray = props.posts.map((post, i) => {
        return (
            <>
                <h2>{post.title}</h2>
                <h4>{post.desc}</h4>
            </>
        )
    })
    return (
        <>

            Hello I am the Blog
            {postArray}
        </>
    );
}
