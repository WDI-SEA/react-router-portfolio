import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Blog from "./components/Blog"
import Header from "./partials/Header"
import blogData from "./data/BlogData"
import projectData from "./data/projectData"
import React, { useState } from "react"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog" render={() => <Blog blogData={blogData} />} />
        <Route path="/projects" render={() => <Projects projects={projectData} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
