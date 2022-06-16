import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">Go Home</Link>
        {" | "}
        <Link to="/about">About Me</Link>
        {" | "}
        <Link to="/blog">Blog</Link>
        {" | "}
        <Link to="/projects">Projects</Link>
      </nav>
    </>
  );
};
export default Header;
