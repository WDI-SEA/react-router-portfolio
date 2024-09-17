import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Layout from './partials/Layout';
import { posts } from './posts';
import './App.css';
import './assets/quote.mp4';
import BlogPost from "./components/BlogPost";
import Header from "./partials/Header";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="App">
      <Router>
        <Header theme={theme} onThemeChange={handleThemeChange} />
        <Layout>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/blog" element={<Blog posts={posts} />} />
            <Route path="/blog/:id" element={<BlogPost posts={posts} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
