import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav>
                <Link to='/'>Homepage</Link>{' | '}
                <Link to='/about'>About</Link>{' | '}
                <Link to='/blog'>Blog</Link>{' | '}
                <Link to='/projects'>Project</Link>{' | '}
            </nav>
        </>
    )
}

export default Header