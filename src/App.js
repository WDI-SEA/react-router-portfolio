//modules
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//components
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Projects from './Projects'
import Nav from './Nav'
import Footer from './Footer'

//styling
import './App.css'

let name = {
    first: "Kennan",
    last: "Salisbury"
  }

let posts = [
  {
    title: "Office Chatter",
    createdAt: "1/16/2020",
    body: "Overcome key issues to meet key milestones you gotta smoke test your hypothesis drop-dead date a loss a day will keep you focus scope creep. Eat our own dog food deploy what's our go to market strategy?. Deep dive. The horse is out of the barn get all your ducks in a row, yet screw the pooch in an ideal world nor waste of resources. Deploy in an ideal world after I ran into Helen at a restaurant, I realized she was just office pretty can you send me an invite? cannibalize, so churning anomalies bake it in. Big boy pants groom the backlog."
  },
  {
    title: "Cupcakes are tasty",
    createdAt: "1/15/2020",
    body: "Macaroon bear claw cotton candy liquorice lemon drops bonbon gummies pudding. Cake muffin sweet roll cake biscuit topping lollipop chocolate cake. Donut brownie macaroon bonbon icing powder apple pie carrot cake."
  },
  {
    title: "Ahoy Matey",
    createdAt: "1/14/2020",
    body: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."
  }
]

let projects = [
  {
    title: "Scrammble",
    technologies: "JavaScript, HTML, CSS",
    description: "Scrammble is a Scrabble Scramble",
    image: "http://place-puppy.com/300x200",
    link: "https://kennansalisbury.github.io/scrabble_scramble/"
  },
  {
    title: "Express Chef",
    technologies: "Node.js, Express.js, EJS, HTML/CSS, SQL/Sequelize, PostgreSQL",
    description: "Recipe app for the express chef",
    image: "http://place-puppy.com/200x300",
    link: "https://cooking-kennan.herokuapp.com/"
  }
]

const App = () => {
  return (
    <Router>
    <div className='app'>

      <header className="app-header">
        <Nav />
      </header>
      
      <main className='main'>
        <Route exact path='/' render={() => 
          <Home name={name} posts={posts} projects={projects} />
          } />
        <Route path='/about' render={() => 
          <About name={name} posts={posts} projects={projects} />
        } />
        <Route path='/blog' render={() => 
          <Blog name={name} posts={posts}/>
        } />
        <Route path='/projects' render={() => 
          <Projects name={name} projects={projects} />
        } />
      </main>
      
    </div>
    </Router>
  )
}

export default App