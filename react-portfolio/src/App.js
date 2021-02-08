import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './component/pages/Home';
import Blog from './component/pages/Blog';
import About from './component/pages/About';
import Projects from './component/pages/Projects';
import Header from './component/Partials/Header';
import './App.css';


class App extends Component {

  state = {
    posts: [ 
      {title: 'Berzerk', body: 'gory, blood, trauma'},
      {title: 'Hunter x Hunter', body: 'adventure, world build, killua'},
      {title: 'Haikyuu', body: 'sport, passion, drive'}
    ]
  }

  render(){


    return (



    <Router>
      <div className="App">
          <h1>
            React PortfolioApp
          </h1>
        <Header />
        <Route exact path="/" component={Home}  />
        <Route path="/blog" component={Blog} render={(props) => <Blog {...props} posts={this.state.posts} />} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
    );
  }
}

export default App;
