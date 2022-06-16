
const Blog = (props) => {

    const post = props.posts.map((post, i) => {
        const { title, date, body, img } = post

        return (
            <ul className='Blogpost' key={`post${i}`}>
                <h3>{title}</h3>
                <h4>{date}</h4>
                <p>{body}</p>
                    {img}
            </ul>
        )
    })

    return (
        <div className="Blog">
            <h1> Upcoming & Current Warhol Exhibits: </h1>
            {post}
        </div>
    );
}

export default Blog;