
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Projects from './components/Projects'
import Header from './components/partials/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    
    <div className="App">

        <BrowserRouter>
            <Header/>

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

// posts={post}