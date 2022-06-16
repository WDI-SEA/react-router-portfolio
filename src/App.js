import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Navigation from './components/partials/Navigation'
import BlogData from './components/data/BlogData'

const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog BlogData={BlogData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
