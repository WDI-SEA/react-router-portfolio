import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  let posts= [
    {
        title: "post1",
        body: "blah1",
        comments: "okay"
      },
      {
        title: "post2",
        body: "blah2",
        comments: "okay yeah"
      },
      {
        title: "post3",
        body: "blah3",
        comments: "okay3"
      }
]

    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog posts={posts}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    )
  }


export default App;
