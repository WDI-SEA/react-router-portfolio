// import React, { Component } from 'react'
// // import Comment from 'src/components/partials/Comment.js'
// import { Link } from "react-router-dom"

// class Post extends Component {
//     // state = {
//     //     // postsToDisplay: this.state.posts
//     //     postsToDisplay: "all the posts!"
//     // }

//     // render() {
//     //     let allPosts = this.props.posts.map(c=>{
//     //         return <Post posts={c}/>
//     //     })

//     state = {
//         body: "Check out this hot cool blog post"
//     }



//     //     render() {
//     //         let allComments = this.props.comments.map(comment => {
//     //             return (
//     //                 <p>{ comment }</p>
//     //             )
//     //         })
//     //         return (
//     //             <div className="posts">
//     //                 <h2>{this.props.post.title}</h2>
//     //                 <h2>{this.props.post.body}</h2>
//     //                 {allComments}
//     //             </div>
//     //         )
//     //     }


//     // }

//     // export default Post

//     render() {
//         let allComments = this.props.comments.map(c => {
//             return <Comment content={c} />
//         })
//         return (
//             <div className="blogPost">
//                 <h2>{this.props.title}</h2>
//                 <p>{this.state.body}</p>
//                 {/* <button onClick={this.editBody}>Edit Body</button> */}
//                 {/* <form onSubmit={this.submitNewBody}> 
//                 <input type="text" />
//                 <input type ="submit" value="Edit Body" />
//             </form> */}
//                 {/* <hr></hr>
//                 <h3>Comments:</h3>
//                 {/* <p>{this.props.comments[0]}</p> */}
//                 {/* <Comment content={this.props.comments[0]}/> */}
//                 {/* {allComments} */} */}
//             </div>
//         )
//     }
// }

// export default Post