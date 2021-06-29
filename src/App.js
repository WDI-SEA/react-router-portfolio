
import './App.css';
import Homepage from './components/Homepage'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




function App() {


  const blogPosts = [
    {
        
        name: 'Blogpost 3: The Aftermath',
        
        body: 'Could this really be the end? Jun 29, 2021'
    },
    {
        
        name: 'Blogpost 2: Next Steps',
        
        body: "Now that it's all over, hasn't it really just begun?, Dec 7, 2017"
    },
    {
        
        name: 'Blogpost 1: The Awakening',
        
        body: 'Discover the new and shocking world of blogs, what does it all mean? Dec 7, 2001'
    }]
    




  return (



    <div className="App">
      
        <Router>
          <Header/>

          <Route exact path="/" component={Homepage} />

          <Route path="/about" component={About}/>

          <Route path="/blog"
           render={(props) => <Blog blogPosts={blogPosts}/>}
           />

          <Route path="/projects" component={Projects} />

          <Route 
        path='/blog/:id'
        render={props => {
          console.log(props.match.params)
        }}
        />

        </Router>


    </div>
  );
}

export default App;
