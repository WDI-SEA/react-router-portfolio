import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import Header from './components/partials/Header';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Projects from './components/pages/Projects';

function App() {
  
  const blogPosts = [
    {title: 'The Last Dance',
    body: "last championship bulls"
    },

    {title: 'Bitcoin',
    body:'the new currency'
    },

    {title: 'Eth',
    body:'the new second currency'
    },

  ]

  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blog" element={<Blog posts={blogPosts}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>

    </Routes>
 </BrowserRouter>
  )
}

export default App;
