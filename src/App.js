import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Layout from './partials/Layout'
import Projects from './components/Projects';
import {posts} from './posts'
import BackgroundVideo from './components/BackgroundVideo';
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog posts={posts}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
