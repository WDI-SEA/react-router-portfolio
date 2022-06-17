import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Homepage from './components/pages/Hompage'
import Blog from './components/pages/Blog'
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';
import './App.css';

function App() {
  const blogs = [
    {
     title: 'Project 3 coming' , 
     body: 'I feel like I just finished my project2, but project 3 is coming next week.'
    },
    {
      title: 'Is Router Easy?',
      body: 'At the beginning of unit 3, react seems so easy. As I learn more and more about react, it seems more complicated than Project 2.'
    }
  ]
  const [blog, setBlog] = useState([...blogs])
  const [post, setPost] = useState({})
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setPost({...post, [e.target.name]: e.target.value})
    
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    setBlog([...blog, post])
    setPost({title: '' , body: ''})
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog' element={<Blog  
        posts={blog} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newPost={post}
        />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
