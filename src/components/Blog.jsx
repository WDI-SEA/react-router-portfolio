
const Blog = (props) => {

    const post = props.posts.map((post, i) => {
        const { title, date, body } = post

        return (
            <ul className='Blogpost' key={`post${i}`}>
                <h3>{title}</h3>
                <h4>{date}</h4>
                <p>{body}</p>
            </ul>
        )
    })

    return (
        <div>
            <h1> Upcoming & Current Warhol Exhibitions: </h1>
            {post}
        </div>
    );
}

export default Blog;