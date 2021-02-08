import React, { Component } from 'react'
import image from './prodrome.png'

class Projects extends Component {
    render() {
        return(
            <div>
                <h1>Prodrome</h1>
                <img src={image} width="600" height="400" />
                <p>Prodrome is a first-person horror game that I am developing using the Unreal Engine 4. The player plays as a nurse in a small mountain town where a mysterious portal has appeared and entrapped the citizens in a time loop from which there is seemingly no escape.</p>
                <h1>BioPlunge: Demo</h1>
                <p>BioPlunge: Demo is short game about an NPC (non-player character) in a fictional first-person shooter who is starting to suspect that he is a background character in a video game. The more self-aware he becomes, the more he tries to assert his free will, and begins openly defying commands that the player gives him.</p>
                <h1>Escape from D-1471</h1>
                <p>Escape from D-1471 is a first-person shooter about an inmate who is trying to escape a futuristic prison complex that clones its inmates and uses the clones for free labor in other facilities owned by the same corporation that owns the prison.</p>
            </div>
        )
    }
}

export default Projects