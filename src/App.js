import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Hompage'
import Blog from './components/pages/Blog'
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Header from './components/partials/Header';
import './App.css';

function App() {
  const blog = [
    {
     title: 'Project 3 coming' , 
     body: 'I feel like I just finished my project2, but project 3 is coming next week.'
    },
    {
      title: 'Is Router Easy?',
      body: 'At the beginning of unit 3, react seems so easy. As I learn more and more about react, it seems more complicated than Project 2.'
    }
  ]
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog' element={<Blog  
        post={blog} />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
