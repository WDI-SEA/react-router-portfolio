import {Link} from 'react-router-dom'
export default function Header(){
    return(
        <>
            <Link to='/'>Home</Link><br></br>
            <Link to='/blog'>Blog</Link><br></br>
            <Link to='/projects'>Projects</Link><br></br>
            <Link to='/about'>About</Link><br></br>
        </>
    )
}