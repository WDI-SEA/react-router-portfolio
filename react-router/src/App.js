import logo from './logo.svg';
import './App.css';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import BlogPost from './components/pages/BlogPost';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
     <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog posts={BlogPost.posts}/>} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
