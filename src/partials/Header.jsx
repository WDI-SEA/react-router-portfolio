import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import lightModeImg from "../assets/lightmode.png";
import darkModeImg from "../assets/darkmode.png";
import "../App.css";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <header>
      <div className="header-grid-container">
        <div className="header-grid-item">
          <Link to="/">
            Home
            <span></span>
          </Link>
        </div>
        <div className="header-grid-item">
          <Link to="/blog">
            Blog
            <span></span>
          </Link>
        </div>
        <div className="header-grid-item">
          <Link to="/about">
            About
            <span></span>
          </Link>
        </div>
        <div className="header-grid-item">
          <div onClick={toggleTheme}>
            {theme === "light" ? (
              <img src={lightModeImg} alt="Light Mode" className="theme-icon" />
            ) : (
              <img src={darkModeImg} alt="Dark Mode" className="theme-icon" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
