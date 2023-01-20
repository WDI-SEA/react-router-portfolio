import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/partials/Header';


function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
