import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';

function App() {
  let post = [
    {title: 'Hello', body: 'Universe'},
    {title: 'My Name', body: 'Paul'},
    {title: 'My Mood', body: 'Tired but Happy'},
    {title: 'Favorite Food', body: 'korean bbq'}
  ]
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog post={post}/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>

        </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
