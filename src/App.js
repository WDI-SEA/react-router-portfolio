import './App.css';
import Homepage from './components/pages/Homepage';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/blog" element={<Blog />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
