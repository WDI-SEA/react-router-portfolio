import React from 'react'

const Projects = () => {
    return (
        <div>
        <h1>My Projects</h1>
        <div className = "projects">
        <img src = "img/tictac.png" width="200px"/>
        <h2>Tic-Tac-Toe</h2>
         </div>
         <div className = "projects">
        <img src = "img/shooter.png" width="200px"/>
        <h2>Protect the castle</h2>
         </div>
         <div className = "projects">
        <img src = "img/food.png" width="200px"/>
        <h2>Food Vault</h2>
         </div>
        </div>
    )
}

export default Projects