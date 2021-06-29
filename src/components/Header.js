import { Link } from 'react-router-dom' 

export default function Header() {
  return (
    <nav className="navbar-dark bg-dark mb-3">
      <ul className="nav justify-content-center">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/Blog">Blog</Link></li>
        <li><Link className="nav-link" to="/About">About</Link></li>
        <li><Link className="nav-link" to="/Projects">Projects</Link></li>
      </ul>
    </nav>
  )
}