import {Link} from 'react-router-dom'

export default function Header() {
    return(
        
        <ul className='nav'>
        <li><Link to='/' className='link'>Home</Link></li>
        <li><Link to='/blog' className='link'>Blog</Link></li>
        <li><Link to='/about' className='link'>About Me</Link></li>
        <li><Link to='projects'className='link'>Projects</Link></li>
        </ul>

    )
}