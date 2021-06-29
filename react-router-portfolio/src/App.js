import './App.css';
import About from './About'
import Blog from './Blog'
import Home from './Home'
import Navigation from './Navigation'
import Projects from './Projects'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom'


const App = () => {
  const objects = [
    {
    name: 'Switzerland',
    description: 'Mountains and valleys and chocolate oh my!'
    },
  
    {
    name: 'Netherlands',
    description: 'Tulips and red lights and windmills oh my!'
    },
  
    {
    name: 'Portugal',
    description: 'Bookstores the Azores and Port wine oh my!'
    },
  
    {
    name: 'New Zealand',
    description: 'Sheep and mountains and beaches oh my!'
    }]
  
  return (
    <div>
      
    <Router>

      <Route exact path='/'
            render={() => <Home />}
            />

      <Route path='/About' 
             render={() => <About />}
             />

      <Route path = '/Blog'
             render={() => <Blog objects={objects} />}
             />

      <Route path= '/Projects'
             render={() => <Projects/>}
      />

      <Navigation />
    </Router>
    
    </div>
  );
}

export default App;
