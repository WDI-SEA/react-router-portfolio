import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
