import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render(){
        return(
            <header>
                <nav>
                    <Link to="/"> Home </Link>{ ' | '}
                    <Link to="/Blog"> Blog </Link>{ ' | '}
                    <Link to="/About"> About </Link>{ ' | '}
                    <Link to="/Projects"> Projects </Link>{ ' | '}
                </nav>
            </header>
        )
    }
}

export default Header;