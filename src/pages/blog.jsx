import { useState } from 'react'


export default function Blog(props) {
    // set state of individual post
    const [posts, setPosts] = useState(props.posts)

    // use helper method to find specific post by index, then splice new post
    // where old post used to be
    function replacePost() {
        
    }


    return (
      <div>
            <h1><u>Blog</u></h1>
            
            {props.posts.map((post, i) => {
                return (
                    <div key={`${i}`}>

                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )
            })}
      </div>
    )
}