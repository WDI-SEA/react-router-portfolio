import './App.css';
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

function App() {
  const blogPosts = [
    {
      name: 'The Beginning: First ring acquired',
      body: 'Decide to enjoy life and help others!'
    },
    {
      name: 'It Continues: Second ring acquired',
      body: 'Get a job in service and realize most people hate life and want to bring you down too'
    },
    {
      name: 'The Show Must Go On: Third ring acquired',
      body: 'Slowly fall into the darkness of the sheep.  Start to believe the world sucks and your life sucks and be bitter as hell'
    },
    {
      name: 'The Grand Finale or Is It: Be the Ring Leader',
      body: 'Decide you no longer care to be a sheep.  Do what makes you happy and continue to try to life others up. We are all dead in the end, so you might as well enjoy the frickin ride, eat the frickin cake, and love your frickin self enough to realize your value is not dependant on another human being.'
    }
  ]
  return (
    <div className="App">
      <h1>
       🎪 Welcome To Circus 🎪
      </h1>

      

      <Router>
        <Header />
          <Route exact path ='/'
          render={() => <Home />}
          />

          <Route path='/blog'
          render={() => <Blog />}
          />

          <Route path='/about'
          render={() => <About /> }
          />

          <Route path='/projects'
          render={() => <Projects /> }
          />

      </Router>
    </div>
  );
}

export default App;
