import React, { Component } from 'react'
import coffee from '../images/coffee.png'
import hoop from "../images/hoopDreams.png"

export default class Projects extends Component {
    render() {
        return (
            <div>
                <h1>This is a list of my projects</h1>
                <img src={coffee} />
                <hr />
                <br />
                <img src={hoop} />
            </div>
        )
    }
}
