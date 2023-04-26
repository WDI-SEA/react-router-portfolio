import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'
import Homepage from './Homepage'
import About from './About'
import Blog from './Blog'
import Projects from './Projects'
import Header from './Header'
import './App.css';

function App() {
  return(
    <div>
      <Router>
        <Header />
        <Routes>
          <Route 
            path='/'
            element={<Homepage />}
          />
          <Route 
            path='/about'
            element={<About />}
          />
          <Route 
            path='/blog'
            element={<Blog />}
          />
          <Route 
            path='/projects'
            element={<Projects />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
