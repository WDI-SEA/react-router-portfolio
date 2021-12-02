import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Nav from './components/partials/Nav';
import Blog from './components/pages/Blog'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';



function App() {
  // const post = {
  //   title: "Dinosaurs are awesome",
  //   author: "Stealthy Stegasauarus",
  //   body: "Check out this hot cool blog post!!",
  //   comments: ["First!", "Great post", "Hire this author now!"]
  // }
  return (

    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />}/>
      
    </Routes>

    </BrowserRouter>
  );
}

export default App;


