import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Nave extends Component{
    render(){
        return(
            <div className="nave">
            <ul className="naveBar">
                <li className="liDesign">
                    <Link to="/">Home</Link>
                </li>
                <li className="liDesign">
                    <Link to="/About">About</Link>
                </li>
                <li className="liDesign">
                    <Link to="/Blog">Blog</Link>
                </li>
                <li className="liDesign">
                    <Link to="/Projects">Projects</Link>
                </li>
            </ul>
            </div>
        )
    }
}

export default Nave