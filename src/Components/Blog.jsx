
export default function Blog(props){

const blogData = props.blogData.map((blog, ind) => {
    return( 
        <div className="inner">
            <div key={`blog-${ind}`}>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
                <hr/>
            </div>
        </div>

    )
})
    return(
        <div>
        <div>
        <h1>My Blog</h1>
        </div>
            {blogData}
        </div>
    )

}