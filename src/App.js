import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './component/Home'
import About from './component/About'
import Blog from './component/Blog'
import Projects from './component/Projects'
import Header from './component/partials/Header'
import dogspot from './dogspot.png'

class App extends Component {
  render(){

    let posts = [
      {
        title: 'Pokemon Post 1',
        content: 'Pokem ipsum dolor sit amet Azurill Spinarak Maractus Escavalier Nidoking Yanmega. Charizard Chinchou Uxie Aron Sonic Boom MysteryBerry Lumineon. Flying Duskull I wanna be the very best Raichu Electabuzz Zangoose Finneon. Squirtle Numel Tangrowth Yamask Mesprit Ash Pokemon. Johto Remoraid Tangrowth Delibird Nidoqueen Slash Farfetch\'d.'
      },
      {
        title: 'Pokemon Post 2',
        content: 'Flying Spiritomb Sunflora Lileep Weedle Metapod we\'re blasting off again. Pokemon Lucario Genesect Mamoswine Crawdaunt Great Ball Yanmega. Water Gun Rotom Swampert Vigoroth I like shorts Houndour you teach me and I\'ll teach you. Poison Cherubi Chinchou Terrakion Porygon consectetur adipisicing elit Elgyem. Flamethrower Harden Giratina Croagunk Reuniclus Ekans like no one ever was.'
      },
      {
        title: 'Pokemon Post 3',
        content: 'Kanto Aggron Shuppet Lillipup Slowking Thundershock Wormadam. Wartortle Infernape Sneasel lorem ipsum dolor sit amet I know it\'s my destiny Budew Amoonguss. Pika-pi Grass Nidoking Deerling Lampent Pidgeot Roserade. Mineral Badge Crawdaunt Cubchoo Sawsbuck Running Shoes Swalot Badge. Celadon Department Store Sawk Archen Thunder Badge Shelmet Ralts Primeape.'
      }
    ]

    return (
      <Router>
        <Header />
        <main className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" render={ () => <Blog posts={posts} /> } />
          <Route path="/projects" render={() =>
          <Projects dogspot={dogspot} /> } />
        </main>
      </Router>
    );
  }
}

export default App;
