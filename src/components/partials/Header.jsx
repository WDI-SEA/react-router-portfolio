import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <header className='card'>
        <nav>
            <Link to='/'>Home Page</Link>{' | '}
            <Link to='/blog'>Blogs</Link>{' | '}
            <Link to='/projects'>Projects</Link>{' | '}
            <Link to='/about'>About Page</Link>
        </nav>
        </header>
        </>
    )
}

export default Header