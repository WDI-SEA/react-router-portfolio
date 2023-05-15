import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import './header.css'

export default function Header() {

    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return(
        <div className={color ? 'header header-bg' : 'header'}>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/' onClick={closeMenu} >Home</Link>
                </li>
                <li>
                    <Link to='/about' onClick={closeMenu} >About Me</Link>
                </li>
                <li>
                    <Link to='/projects' onClick={closeMenu} >My Projects</Link>
                </li>
                <li>
                    <Link to='/contact' onClick={closeMenu} >Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{color: '#fff'}}/>

                ) : (
                    <FaBars size={20} style={{color: '#fff'}}/>

                )}
            </div>
        </div>
    )
}