import { Link, Outlet, useParams } from "react-router-dom";
import { getPancakes, getPancake } from "./App";

export default function Blog() {
  const { pancakeId } = useParams(); 
  let blog = getPancakes();

  const selectedBlog = getPancake(pancakeId);

  console.log( 'bloggg: ', selectedBlog)
  
  return (
    <>
      <h2> Find your perfect Pancake!</h2>
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {blog.map(blog => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/blog/${blog.id}`}
              key={blog.id}
            >
              {blog.name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}