
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/about">About</Link>
                {" | "}
                <Link to="/menu">Menu</Link>
                {" | "}
                <Link to="/contact">Contact Us!</Link>
            </nav>
        </>
    )
}
export default Heade