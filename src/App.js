import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { postsArr } from "./loremIpsumData"

import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Projects from './components/Projects';
import Header from './partials/Header';
import Post from './components/Post';

export default function App() {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState({ id: "", title: "", description: "" })

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={"/"}
          element={<Home />}
        />
        <Route
          path={"/about"}
          element={<About />}
        />
        <Route
          path={"/projects"}
          element={<Projects />}
        />
        <Route
          path={"/blog"}
          element={
            <Blog
              posts={postsArr}
              blogs={blogs}
              setBlogs={setBlogs}
              newBlog={newBlog}
              setNewBlog={setNewBlog}
            />
          }
        />
        <Route
          path={"/blog/:blogId"}
          element={
            <Post
              posts={postsArr}
              blogs={blogs}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
