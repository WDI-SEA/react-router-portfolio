import React, { Component } from 'react'


class Projects extends Component{
    render(){
        return(
            <div>
                <h1>DogSpot</h1>
                <img className="dogspotPic" src={this.props.dogspot} />
                <p>DogSpot is an app that allows users to look up dog breeds, click on a link to lear more about the dogs, and save them to a favorite "My Dogs" list. Check it out for yourself <a href="https://dogspot.herokuapp.com/" target="_blank">here!</a></p>
            </div>
        )
    }
}

export default Projects