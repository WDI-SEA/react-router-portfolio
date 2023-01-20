
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/about">About</Link>
                {" | "}
                <Link to="/">Blog</Link>
                {" | "}
                <Link to="/projects">Projects</Link>
            </nav>
        </>
    )
}
export default Header