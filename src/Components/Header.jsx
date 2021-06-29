import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="header">
      <ul className="ulHeader">
          <li class="liHeader">
            <Link to='/'>Home</Link>
          </li>

          <li className="liHeader">
            <Link to='/about'>About Us!</Link>
          </li>

          <li className="liHeader">
          <Link to='/blog'>Blog</Link>
          </li>

          <li className="liHeader">
          <Link to='/portfolio'>Portfolio</Link>
          </li>
      </ul>
  </nav>
  )
}