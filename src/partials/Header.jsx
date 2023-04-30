import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css'

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header>
      <div className="header-grid-container">
        <div className="header-grid-item">
          <Link to="/">
            Home
            <span ></span>
          </Link>
        </div>
        <div className="header-grid-item">
          <Link to="/blog">
            Blog
            <span ></span>
          </Link>

          <Link to="/about">
            About
            <span ></span>
          </Link>

          <Link to="/projects">
            Projects
            <span ></span>
          </Link>
        </div>
        <div className="header-grid-item">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
