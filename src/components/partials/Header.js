import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav>
                <Link to='/'>Go to Home Page</Link>{' | '}
                <Link to='/blog'>See my Blog</Link>{' | '}
                <Link to='/about'>About me</Link>{' | '}
                <Link to='/projects'>My Projects</Link>
            </nav>
        </>
    )
}