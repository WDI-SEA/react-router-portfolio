import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Header from './components/partials/Header';
import './App.scss';

function App() {
  return (
    <div className='container-app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
