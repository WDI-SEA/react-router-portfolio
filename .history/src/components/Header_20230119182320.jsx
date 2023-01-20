
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/about">About</Link>
                {" | "}
                <Link to="/pro">Blog</Link>
                {" | "}
                <Link to="/contact">Projects</Link>
            </nav>
        </>
    )
}
export default Header