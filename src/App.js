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



const blogData = [
  {
    title: 'Post title',
    author: 'John Doe',
    date: 'April 26, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed urna eu tellus hendrerit facilisis. Donec blandit euismod est, non ultrices sapien consequat ac.'
  },
  {
    title: 'Post title',
    author: 'Jane Smith',
    date: 'April 25, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed urna eu tellus hendrerit facilisis. Donec blandit euismod est, non ultrices sapien consequat ac.'
  },
  {
    title: 'Post title',
    author: 'John Doe',
    date: 'April 24, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed urna eu tellus hendrerit facilisis. Donec blandit euismod est, non ultrices sapien consequat ac.'
  }
];



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
            element={<Blog blogData={blogData}/>}
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
