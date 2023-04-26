import {Link} from "react-router-dom"

export default function Blogs(props) {

    const posts = props.blogPost.map((post, i) => {
        return(
            <>
            <div className="blogContainer">
                <div className='title'> 
                    <Link to={`/blog/${i}`}>{post.title}</Link>
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