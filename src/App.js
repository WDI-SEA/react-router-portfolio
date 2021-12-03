import './App.css';
import About from './components/pages/About'
import Blog from "./components/pages/Blog"
import Homepage from './components/pages/Homepage';
import Projects from './components/pages/Projects'
import Header from './partials/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog posts={Blog.posts}/>}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
