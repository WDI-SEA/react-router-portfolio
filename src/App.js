import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Layout from "./components/partials/Layout";
import Home from "./components/pages/Home";
import Project from "./components/pages/Projects";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import NewBlog from "./components/pages/NewBlog";

import murphyBlogs from './blogs';

import logo from './logo.svg';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState(murphyBlogs)

  const handleNewBlog = (title, content) => {
    console.log("handleNewBlog triggered");
    console.log("title: " + title);
    console.log("content: " + content);
    const newPost = {title, content};
    blogs.push(newPost);
    // const blogsCopy = [...blogs, newPost]
    // setBlogs(blogsCopy)
  }

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route
            path='/'
            element={<Home/>}
            />
            <Route
            path='/projects'
            element={<Project/>}
            />
            <Route
            path='/about'
            element={<About/>}
            />
            <Route
            path='/blog'
            element={<Blog
            blogs={blogs}
            />}
            />
            <Route
            path='/blog/newblog'
            element={<NewBlog
            blogs={blogs}
            handleNewBlog={handleNewBlog}
            />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
