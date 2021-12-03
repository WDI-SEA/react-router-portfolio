import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Header from './components/partials/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Project from './components/pages/Project'

export default class App extends Component {

  render() {
    const post = {
      title: "React is better than EJS",
      author: "Jason Harr",
      comments: ["100%", "I like Angular", "Whoever said Angular is better is wrong"]
    }

    return (
      <BrowserRouter>
        <div className="navbar">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog title={post.title}
            author={post.author}
            body={post.body}
            comments={post.comments} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
