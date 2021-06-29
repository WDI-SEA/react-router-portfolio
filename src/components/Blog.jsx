import {Link} from 'react-router-dom'



export default function Blog(props) {

    const listPosts = props.blogPosts.map((bP, index) => {
        return( <li key={index}>
            <Link to={`/blog/${index}`}> {bP.name}</Link>
            <p>{bP.body}</p>
        </li>)
    })




    return(
        <div>
            <h1>Blog</h1>
            {listPosts}

        </div>
    )
}