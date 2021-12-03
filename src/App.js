import './App.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Nav from './components/partials/Nav';
import Blog from './components/pages/Blog'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';



function App() {
  const blogPosts = { 
    posts: [
    {
        "title": "Cooking while coding",
        "subTitle": "my go to meals during project week",
        "content": "Cheese on toast croque monsieur macaroni cheese. Cheese slices caerphilly gouda roquefort cow chalk and cheese cut the cheese cheddar. St. agur blue cheese stilton jarlsberg jarlsberg cheese triangles cauliflower cheese feta parmesan. Taleggio lancashire croque monsieur edam taleggio bavarian bergkase st. agur blue cheese."
    },
    {
        "title": "Now's the time to fix the internet",
        "subTitle": "how a more ethical, less ad-driven internet can fuel innovation",
        "content": `Lorem Khaled Ipsum is a major key to success. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. Wraith talk. They don’t want us to win ${<br/>}We the best. Celebrate success right, the only way, apple. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. How’s business? Boomin. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. Give thanks to the most high. Eliptical talk. Look at the sunset, life is amazing, life is beautiful, life is what you make it.`
    },
    {
        "title": "Back to the Future",
        "subTitle": "the future is now",
        "content": "Where's Einstein, is he with you? Ronald Reagon. Leave me alone. No, why, what's a matter? Alright, let's set your destination time. This is the exact time you left. I'm gonna send you back at exactly the same time. It's be like you never left. Now, I painted a white line on the street way over there, that's where you start from. I've calculated the distance and wind resistance fresh to active from the moment the lightning strikes, at exactly 7 minutes and 22 seconds. When this alarm goes off you hit the gas."
    }
  ]  
}
  const myWork = { 
    projects: [
    {
        "name": "Follow My Lead",
        "techStack": "HTML5, CSS, JavaScript",
        "description": "'Follow My Lead' is a two-player input matching game that has players take alternating turns trying to match inputs while taking certain modifiers into consideration.",
        "imgUrl" : "https://i.imgur.com/W6AwHYx.png",
        "projectUrl:": "https://cmiltiadou.github.io/sei-game-Follow-My-Lead/"
    },
    {
        "name": "MIYO Recipes",
        "techStack": "HTML5, CSS, JavaScript, EJS, PostgreSQL",
        "description": "'a prototype site for users to store and organize their recipes. The main selling point is that users can find a recipe they like, add it to their collection, and edit it to make it their own (i.e. take a bbq pork recipe, and turn it into a bbq lamb recipe). Think GitHub forking, but for recipes",
        "imgUrl" : "https://i.imgur.com/qbsuQ9F.png",
        "projectUrl:": "https://miyo-recipes.herokuapp.com/"
    },
    
  ]  
}
  return (

    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home posts = {blogPosts.posts} projects = {myWork.projects} />}/>
      <Route path="/blog" element={<Blog posts = {blogPosts.posts}  />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects  projects = {myWork.projects}/>}/>
      
    </Routes>

    </BrowserRouter>
  );
}

export default App;


