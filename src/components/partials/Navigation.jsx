import { Link } from 'react-router-dom' 
const Navigation = () => {
    return (
        <>
            <nav>
                <Link to="/">Go Home Son</Link>{" | "}
                <Link to="/about">Get To Know Ya Boi</Link>{" | "}
                <Link to="/projects">Projects Roight Hea</Link>{" | "}
                <Link to="/blog">Check Out Me Blog!</Link>
            </nav>
        </>
    )
}
export default Navigation