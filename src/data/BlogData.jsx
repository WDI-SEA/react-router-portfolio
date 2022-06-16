// import { Link } from "react-router-dom"

// const blogData = (props) => {
//   const blogArr = props.blogData.map((blogData, i) => {
//     return (
//       <li key={`blog-${i}`}>
//         <Link to={`/blog/${blogData.id}`}>{blogData.name}</Link>
//       </li>
//     )
//   })
//   return (
//     <>
//       <h2>Blog's</h2>
//       <ol>{blogArr}</ol>
//     </>
//   )
// }
// export default blogData

let BlogData = [
  {
    title: "Emily's Fist Blog",
    content: "Does it get any better than blog one?",
  },
  {
    title: "Emily's Second Blog",
    content: "Yes, blog two.",
  },
]

export default BlogData