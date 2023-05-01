import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Layout from './partials/Layout'
import {posts} from './posts'
import BackgroundVideo from './components/BackgroundVideo';
import './App.css'
import BlogPost from "./components/BlogPost";


function App() {
  
  return (
    <div className="App">
      <Router>
        <Layout>          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog posts={posts}/>} />
          <Route path="/blog/:id" element={<BlogPost posts={posts}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
