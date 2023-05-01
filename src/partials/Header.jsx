import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../App.css'

export default function Header() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
      );
      const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
      }, [theme]);

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
        </div>
        <div className="header-grid-item">
          <Link to="/about">
            About
            <span ></span>
          </Link>
        </div>
        <div className="header-grid-item">
      <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </div>
    </header>
  );
}
