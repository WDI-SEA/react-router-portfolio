import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom"
import { useState } from 'react'
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Projects from "./components/pages/Projects";
import Layouts from "./components/partials/Layouts";
import Header from "./components/partials/Header";

import dxk0taBlogs from './components/pages/Blog'
import Post from "./components/pages/Post";


export default function App(props) {
  
  const posts = [
    {
      
    }
  ]
  
  return (
    <div className="App">
      <Router>

      <Layouts>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />

          <Route 
            path="/about"
            element={<About />}
          />

          <Route 
            path="/blog"
            element={<Blog />}
          />

          <Route 
            path="/projects"
            element={<Projects />}
          />

        </Routes>
      </Layouts>
      </Router>
    </div>
  );
  }

