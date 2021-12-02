import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/partials/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'
import { useState } from 'react';

function App() {

  const posts = [{title: 'setState()', body: 'The setState() method in React is asynchronous.'},
    {title: 'React Router', body: 'Router is a set of tools to fool the browser into thinking that it is working with a SPA.'}]

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog posts={posts}/>}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
