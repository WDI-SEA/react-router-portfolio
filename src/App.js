import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Header from './components/partials/Header';

let posts = [
  {
    title: "My first post",
    content: "This is my first post",
  },
  {
    title: "My second post",
    content: "This is my second post",
  },
  {
    title: "My third post",
    content: "This is my third post",
  }
];
  
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog posts = {posts}/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>

    
  )
}

export default App;
