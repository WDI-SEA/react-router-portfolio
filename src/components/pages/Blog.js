import React, { Component } from 'react'
// import Post from '../partials/Post'
// import { Link } from "react-router-dom"

class Blog extends Component {

    render() {
        let allPosts = this.props.posts.map((bp) => {
            return (
                <div>
                    <h2>{bp.title}</h2>
                    <small>{bp.body}</small>
                    {/* <AllBlogPosts posts={AllBlogPosts.posts} /> */}
                </div>
            )
        })
            return (
            <div>
                <h1>Blogs:</h1>
                {allPosts}

            </div>
        )
    }
}

export default Blog

//     render() {
//         const post = {
//             title: "Dinosaurs Are Fine",
//             body: "Check out this hot cool blog post",
//             comments: ["First!", "Great post", "Hire this author now!"]
//         }
//         return (
//             <Post
//                 title={post.title}
//                 body={post.body}
//                 comments={post.comments}
//             />
//         )
//     }
// }

// export default Blog

