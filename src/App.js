import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Header from './content/components/Header';
import Footer from './content/components/Footer';
import Content from './content/Content';

function App() {
  let testPosts = [
    {
      title: 'I love plants',
      body: 'Especially the calatheas, but they don\'t love me back 😭'
    },
    {
      title: 'Computers amirite?',
      body: 'Dumb, just like me'
    },
    {
      title: 'Gratitude is a key to happiness',
      body: 'thanks pete'
    }
  ]
  let [posts, setPosts] = useState(testPosts)

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Content posts={posts} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;