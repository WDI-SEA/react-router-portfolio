import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <nav>
        <Link to="/">Go to Home Page</Link>
        { " | " }
        <Link to="/blog">Opal's Blog</Link>
        { " | " }
        <Link to="/about">About Opal</Link>
        { " | " }
        <Link to="/projects">Opal's Projects!</Link>
    </nav>
  )
}
