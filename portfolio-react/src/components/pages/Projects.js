import React, { Component } from "react";
import '../../App.css'



export default class Projects extends Component {
    render () {
        return (
        <div>
            <h1>Projects🌸</h1>
            <p>Click below to see my anime project 'Animoots'! You will be able to make an account, search for animes and characters and favorite them to your profile!</p>
     <h4><a href={"https://animoots.herokuapp.com/"}>Animoots</a></h4>
     <p>Click below to see my gaming project 'Draco Meteor'! You are a player who got sent to space on a mission to collect all the stars to save the planet from destruction. The catch... the player has to dodge meteors while collecting stars. Once you collect 50 stars you win and save the planet. If you hit a meteor, the player dies and the planet will be destroyed!</p>
     <h4><a href={"https://lindzcoding.github.io/"}>Draco Meteor</a></h4>

     <img src='/gameshot.png' className='game-image' />
        </div>
        )
    }

}