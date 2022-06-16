
const Blog = (props) => {

    const post = props.posts.map((post, i) => {
        const { title, date, body, img } = post

        return (
            <ul className='Blogpost' key={`post${i}`}>
                <h3>Exhibit: {title}</h3>
                <h4>Date: {date}</h4>
                <p>Details: {body}</p>
                    {img}
            </ul>
        )
    })

    return (
        <div className="Blog">
            <h1> Current & Upcoming Warhol Exhibits: </h1>
            {post}
        </div>
    );
}

export default Blog;