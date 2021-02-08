import React, {Component} from 'react'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import Nave from './components/pages/partials/Nave'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import temp from './temp.css'
import projectInfo from "./ProjectInfo"
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
class App extends Component{
  render(){
    return(
      <div class="Main">
        
        <Router>
        {/*<Link to="https://github.com/YasamanForouzesh"><img  src={require('./images/github.png').default}/></Link> <Route path="https://github.com/YasamanForouzesh"/> */}
        <Nave/>
        <Route exact path='/' component={Home}/>
        <Route  path='/About' component={About}/>
        <Route  path='/Blog' component={Blog}/>
        <Route  path='/Projects' render={(props)=>{
          return(<Projects infos={projectInfo}/>)
        }}/>
        </Router>
      </div>
    )
  }
}
export default App