import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  let posts = [
    {title: '1', body: 'This is 1.'},
    {title: '2', body: 'This is 2.'},
    {title: '3', body: 'This is 3.'}
  ]
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog 
        posts={posts}
        />} 
      />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
