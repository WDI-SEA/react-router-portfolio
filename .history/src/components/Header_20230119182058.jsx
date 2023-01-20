
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/about">About</Link>
                {" | "}
                <Link to="/menu">Blog</Link>
                {" | "}
                <Link to="/contact"></Link>
            </nav>
        </>
    )
}
export default Heade