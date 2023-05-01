import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import lightModeImg from "../assets/lightmode.png";
import darkModeImg from "../assets/darkmode.png";
import "../App.css";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    window.location.reload();
  }
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <header>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');
</style>
      <div className="header-grid-container">
        <div className="header-grid-item">
          <Link to="/" className="btn">
            Home
            <span></span>
          </Link>
        </div>
        <div className="header-grid-item">
          <Link to="/blog" className="btn">
            Blog
            <span></span>
          </Link>
        </div>
        <div className="header-grid-item">
          <Link to="/about" className="btn">
            About
            <span></span>
          </Link>
        </div>
        <div className="header-grid-item" >
          <div onClick={toggleTheme} >
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
