import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/projects">Projects</Link> {" | "}
        <Link to="/blog">Blog</Link> {" | "}
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}
