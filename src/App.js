import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom"
import { useState } from 'react'
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";
import Post from'./components/pages/Post';
import Layouts from "./components/partials/Layouts";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import postsArr from "./components/pages/Post";


export default function App(props) {
  
  const posts = [(`${props.title, props.body}`)]
  
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
            element={
              <Blog 
                posts={postsArr}
              />
            }
          />

          <Route 
            path={'/blog/:blogId'}
            element={
              <Post 
                posts={postsArr}
              />
            }
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

