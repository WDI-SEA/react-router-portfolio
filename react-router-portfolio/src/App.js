import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';


import Home from './components/Home'
import Blog from './components/Blog'
import Projects from './components/Projects'
import About from './components/About'
import Header from './components/Header'




class App extends Component {
  state = {
    posts: [
      {title:'Bloodborne', body:'Mixing fast passed and brutal combat with lovecraftin horrors? Yes please, more now in my face.', img:'https://i2.wp.com/seasonedgaming.com/wp-content/uploads/2020/01/3.jpg?resize=640%2C360&ssl=1'},
      {title:'Resident Evil', body:'What got me into horror to begin with. I remember being a young lad fighting my way through a hord of zombies, thinking I was king. Only to get body slammed by terror upon discovering Mr.X. The trend has continued and I can not complain.', img:'https://media.npr.org/assets/img/2020/04/08/re3_jill_vs_zombies_wide-141aa6244aa049d40610b91300d4b41cf5448f36-s800-c85.jpg'},
      {title: 'Hunter x Hunter', body:'One of my favorite animes of all time. Character rich and skillfully drawn it is sure to please anyone seeking adventure', img:'https://static.wikia.nocookie.net/hunterxhunter/images/6/69/Phantom_Troupe_2011.png/revision/latest?cb=20130620042709'},
      {title: 'Berserk', body:'Standing so far as one of my favorite stories of all time. I find the story and characters to be deep and unashamed of showing the true darksides of huminty. Pushing boundries and testing readers perceptions of right and wrong the blood soaked trek into the very bowels of hell is not one to miss.', img:'https://geekculture.co/wp-content/uploads/2020/06/Berserk-manag-delayed.jpg'}
    
    ]
}
  render () {
     return (
      <Router>
       <div className="App">
         <Header />
         <Route exact path='/' component={Home}/>
         <Route path='/Blog' render={() => <Blog posts={this.state.posts} />} />
         <Route path='/About' component={About} />
         <Route path='/Projects' component={Projects} />
      </div>
    </Router>
    );
  }
}

export default App;
