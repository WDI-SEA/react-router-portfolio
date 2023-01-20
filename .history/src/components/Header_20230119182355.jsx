
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/about">About</Link>
                {" | "}
                <Link to="/projects">Blog</Link>
                {" | "}
                <Link to="/b">Projects</Link>
            </nav>
        </>
    )
}
export default Header