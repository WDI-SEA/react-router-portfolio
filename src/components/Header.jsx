import {Link} from 'react-router-dom'
export default function Header() {
    return(
        
            <nav>
                <ul>
                    <li><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to='/blog' style={{ textDecoration: 'none' }}>Blog</Link></li>
                    <li><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
                    <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>
                </ul>
            </nav>
          
          
          
       
        
    )
}