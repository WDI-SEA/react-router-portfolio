import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
