import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';


function App() {

  // let blogPosts = [
  //   {title: "Mental Health - The taboo, the difficulties, the understanding", body: "Hey! Welcome to my first blog post. I wanted to take some time to discuss mental health. With the craziness of everyday life, we rarely stop to check in with ourselves to see where we stand mentally, emotionally, spiritually, and physically. I implore you to write down goals for yourself that improve upon your inner self, whether that be doing yoga, working out, meditating, going to therapy. You must pour into your glass before you can pour into others! "},
  //   {title: "Twitter Hack", body: "With the most recent Twitter hack, notable figures around the world are concerned with the unauthorized use of their data and private conversations! This creates a larger narrative around encryption and the implication of security measures versus the state protection of it's citizens. It seems that we play around this line pretty often and the more we learn from documentaries, such as \"The Great Hack\", and news articles about the foreign influence in our political climate through social media, the more we realize that social media is may technically be free but we pay for it with something so important."},
  //   {title: "The SNES Mini - My Thoughts", body: "This is the story of how I got my hands on a SNES Mini! My cousin's fiance bought it for my cousin's brothers as a present, only to learn that they already owned one. I have a close relationship with both my cousin and her fiance and thus I was a good second option for the SNES Mini.  Now, I would be more irked about being the second choice if I didn't love the nostalgia factor that this adorable, classic, engaging remake of a legendary gaming console provides for me. My eldest brother had an SNES when he was young and playing Street Fighter and Mario Kart with him brought us so much happiness."}
  // ]

  let procedures = [
    "Deep Cleaning",
    "Crown",
    "Filling",
    "Root Canal",
    "Oral Surgery"
  ]

  const [posts, setPosts] = useState(procedures);


  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Go Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">My Projects</Link>
        </nav>
      </div>
      <div className="App">
        <h1>My Porfolio</h1>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/projects" render={() => <Projects posts={posts} />} />
      </div>
    </Router>
  );
}

export default App;
