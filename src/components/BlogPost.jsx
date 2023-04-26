import { useParams } from "react-router-dom";

export default function BlogPost(props) {
  const { id } = useParams();
  const post = props.blogPost.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <div className="blogContainer">
        <div className="title">{post.title}</div>
        <div>{post.description}</div>
      </div>

    </>
  );
}