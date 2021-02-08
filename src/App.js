import React, { Component } from 'react'
import './App.css'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './components/partials/Header'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'

class App extends Component {
  render() {
    let blogPosts = [
      'Over the course of a few weeks, my computer slowly started losing its ability to charge. It finally died completely on friday night. My instincts told me that it was probably just the AC adaptor, but there were also symptoms of a bad motherboard. I ordered a new adaptor, and while I waited for it to arrive, I tried downloading the Unreal Engine onto my Macbook, but it kept crashing after compiling the shaders. Fortunately, the adaptor came and it worked fine. I was terribly releived. I cannot afford a new computer right now.',
      'After weeks of trying to make the portal in Prodrome look dope with particle effects, I still just was not feeling it. And it was making the frame rate lag like crazy. So I took a new approach. Instead of using dozens of tiny spheres orbiting around a nucleus, I just placed two larger spheres side by side and made them oscilate at slightly different frequencies. It is economical and looks totally badass. I cant wait to put sound to it.',
      'The trees just have too many polygons, and low-poly trees clash too much with the rest of the meshes. So I took the Silent Hill approach and just draped the whole environment in fog, which allowed me to tone the LOD way down. It looks super spooky.'
      ]
    return(
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" render={() => <Blog blogPosts={blogPosts} />} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    )
  }
}

export default App