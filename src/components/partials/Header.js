import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav>
      <Link to='/'>Go to Home Page</Link>{' | '}
      <Link to='/blog'>Blog</Link>{' | '}
      <Link to='/projects'>projects</Link> {' | '}
      <Link to='/about'>about</Link>
    </nav>
        </>
    )
}
export default Header
