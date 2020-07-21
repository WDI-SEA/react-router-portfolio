import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Homepage from "./Homepage";
import Blog from "./Blog";
import About from "./About";
import { Heading } from "@chakra-ui/core";
// import { theme } from "@chakra-ui/core";
// import { ThemeProvider } from "@chakra-ui/core";

let [blogs] = useState([
  {
    title: "On the Merits of TypeScript",
    author: "KMS",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris cursus mattis molestie. Turpis egestas sed tempus urna et pharetra pharetra. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Duis at tellus at urna condimentum mattis pellentesque. Orci a scelerisque purus semper eget duis at tellus at. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Eget dolor morbi non arcu risus quis varius quam quisque. Sodales neque sodales ut etiam. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nisl suscipit adipiscing bibendum est. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Augue lacus viverra vitae congue eu consequat ac. Parturient montes nascetur ridiculus mus. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Id cursus metus aliquam eleifend. Mauris vitae ultricies leo integer malesuada nunc vel risus."},
  {
    title: "Why You Should Learn Sass",
    author: "KMS",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus ut faucibus pulvinar elementum integer. Libero enim sed faucibus turpis in eu mi bibendum neque. Vitae auctor eu augue ut. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Odio euismod lacinia at quis risus sed. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Ipsum consequat nisl vel pretium lectus quam id leo. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Non enim praesent elementum facilisis leo vel. Urna nec tincidunt praesent semper feugiat. Suscipit tellus mauris a diam maecenas sed enim ut. Elementum facilisis leo vel fringilla est ullamcorper eget. Tortor consequat id porta nibh. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Euismod in pellentesque massa placerat duis ultricies. Luctus accumsan tortor posuere ac ut."},
  {
    title: "The Benefits of Virtual Networking",
    author: "KMS",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Pellentesque habitant morbi tristique senectus et netus et. Mi eget mauris pharetra et ultrices neque ornare aenean. Orci eu lobortis elementum nibh tellus molestie nunc non. Vulputate odio ut enim blandit. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Integer feugiat scelerisque varius morbi enim nunc. Tristique senectus et netus et malesuada."},
  {
    title: "Take Breaks and Make Better Tech",
    author: "KMS",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci. Amet consectetur adipiscing elit duis tristique sollicitudin. Eu feugiat pretium nibh ipsum consequat. Ut etiam sit amet nisl purus in mollis nunc sed. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Et netus et malesuada fames ac turpis egestas. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Cum sociis natoque penatibus et magnis dis parturient montes. Eu augue ut lectus arcu bibendum. Quis lectus nulla at volutpat diam. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Enim lobortis scelerisque fermentum dui. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Consectetur adipiscing elit ut aliquam purus sit. Massa sapien faucibus et molestie ac. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Senectus et netus et malesuada fames ac. Purus in massa tempor nec feugiat nisl."},
  {
    title: "It's Okay You're Not Getting Anything Done Right Now",
    author: "KMS",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in. Nulla facilisi morbi tempus iaculis urna. Nunc sed blandit libero volutpat. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Suspendisse in est ante in nibh. Libero id faucibus nisl tincidunt eget nullam non nisi. Et tortor at risus viverra adipiscing at in. Adipiscing elit pellentesque habitant morbi. Tellus mauris a diam maecenas."}
])

let [projects] = useState([
  {
    title: "Origami Pet",
    repo: "https://github.com/karlmiche/origami_pet",
    src: "",
    description: "A time-based game...feed your bird!"
  }, 
  {
    title: "glisten (good listen",
    repo: "https://github.com/karlmiche/KMS-p2-glisten",
    src: "",
    description: "An app to transcribe audio files and speech in-browser."
  }
])

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Heading>
            <Link to="/">Homepage</Link>
            <Link to="/blog">My Blog</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
          </Heading>
        </nav>
      </div>
      <div className="routes">
      <Route exact path="/" component={Homepage} />
        <Route path="/blog" render={() => <Blog blogs={blogs}/>} />
        <Route path="/projects" render={() => <Projects projects={projects}/>} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
