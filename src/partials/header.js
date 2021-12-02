import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <header className='nav-list`'>
        <nav>
          <ul>
            <li className='headerLi'>
              <Link to="/">Home Page</Link>
            </li>
            <li className='headerLi'>
              <Link to="/blog">Blog Page</Link>
            </li>
            <li className='headerLi'>
              <Link to="/about">About Me</Link>
            </li>
            <li className='headerLi'>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
