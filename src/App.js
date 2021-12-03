
// React and CSS import
import React, { Component } from 'react'
import './App.css'

// react-router-dom import
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

// component imports
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Header from './components/partials/Header'


export default class App extends Component {
  render() {
    const posts = [
      {
        title: 'title 1',
        body: 'body 1'
      },
      {
        title: 'title 2',
        body: 'body 2'
      },
      {
        title: 'title 3',
        body: 'body 3'
      },
      {
        title: 'title 4',
        body: 'body 4'
      }
    ]
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog posts={posts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    )
  }
}