


export default function Blog(props) {
    return (
      <div>
        {props.posts.map((post, i) => {
            return (
                <div>
                    <h1><u>Blog</u></h1>

                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )
        })}
      </div>
    )
}