import React, { Component } from 'react'
import image from './prodrome.png'

class Projects extends Component {
    render() {
        return(
            <div>
                <h1>Prodrome</h1>
                <img src={image} width="600" height="400" />
                <p>Prodrome is a first-person horror game that I am developing using the Unreal Engine 4. The player plays as a nurse in a small mountain town where a mysterious portal has appeared and entrapped the citizens in a time loop from which there is seemingly no escape.</p>
            </div>
        )
    }
}

export default Projects