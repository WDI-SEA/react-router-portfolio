import { render } from "@testing-library/react";
import Reacct, { Component } from "react"
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <header>
                <nav>
                    <Link to='/'>this is home</Link> {' | '}
                    <Link to='/blog'>blog Page</Link> {' | '}
                    <Link to='/AboutMe'>About me</Link> {' | '}
                    <Link to='/projects'>my projects</Link>
                </nav>
            </header>
        )
    }
}

export default Header