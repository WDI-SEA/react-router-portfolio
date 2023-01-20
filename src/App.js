import {
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
  Link
} from 'react-router-dom'


//pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Project from './pages/Project';



export default function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <h1>YoshBook</h1>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='blog' element={ <Blog /> } />
            <Route path='projects' element={ <Project /> } />
            <Route path='about' element={ <About /> } />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}


