import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Header from './components/navbar/Header'
import './App.css';
import Footer from './components/footer/Footer'



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
          {/* <Route 
            path='/contact'
            element={<Contact />}
          /> */}
          <Route 
            path='/projects'
            element={<Projects />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
