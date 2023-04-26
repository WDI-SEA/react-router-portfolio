export default function Blog(props) {

    const blogs = props.blogData.map((data, i) => {
        return(
            <div key={`data ${i}`}>
                <h1>{data.title}</h1>
                <p>Author: {data.author}</p>
                <p>{data.content}</p>
                <p>{data.date}</p>
            </div>
            )
    })

    return(
        <div>
            {blogs}
        </div>
    )
}