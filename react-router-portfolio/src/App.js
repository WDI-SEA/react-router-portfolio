import React from 'react';
import './App.css';
import Homepage from './Homepage'
import './fonts '
// import Projects from './Projects'
// import About from './About'
// import Blog from './Blog'

let posts = [
`I'm baby four loko la croix unicorn before they sold out heirloom drinking vinegar. 
Cardigan lyft taxidermy cronut. Pabst literally chicharrones freegan lumbersexual vaporware
 narwhal meggings locavore 3 wolf moon subway tile deep v. Mustache pitchfork letterpress, 
 kinfolk biodiesel man braid tbh kitsch. 90's echo park health goth williamsburg jean shorts. 
 Vexillologist intelligentsia tilde chillwave, biodiesel 3 wolf moon YOLO wolf lyft air plant 
 banjo pitchfork ethical.`,
  `I'm baby bushwick bitters small batch, brooklyn blog laboris woke retro pug normcore lo-fi 
  austin cornhole. Affogato organic bushwick fingerstache cardigan. Single-origin coffee adaptogen 
  migas, pok pok pariatur squid lorem williamsburg DIY semiotics freegan 3 wolf moon. Put a bird 
  on it narwhal pickled tumblr. Actually ethical hot chicken forage, bicycle rights seitan disrupt 
  godard etsy edison bulb fixie. Shaman hella mustache, portland crucifix esse deep v jianbing 
  ad organic mumblecore subway tile.`,
  'Random #52000000000'
]

function App() {
  return (
    <div className="App">
      <Homepage posts={posts} />
    </div>
  );
}

export default App;
