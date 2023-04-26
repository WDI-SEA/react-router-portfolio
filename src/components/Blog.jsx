

export default function Blogs(props) {

    const posts = props.blogPost.map((post, i) => {
        return(
            <>
            <div className="blogContainer">
                <div className='title'> 
                    {post.title}
                </div>
                <div>
                    {post.description}
                </div>
            </div>
            </>
        )
    })

    return(
        <>
        <h1>My Personal Blog</h1>
        <div className='container'>
        {posts}
        </div>
        </>
    )
} 