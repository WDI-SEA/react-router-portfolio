import React, { Component } from 'react'


class Projects extends Component {
    render() {
        return (
            <div className='myContainer'>
              <h1>Check out my Projects!</h1>
              <div>
              <h3><a href={`https://express-auth-reference.herokuapp.com/`}>Recipe Collector App Link</a></h3>
              <img src='/recipe.png' className='image' alt="Recipe Image"/>
              </div>
              <div>
                  <h3><a href={`https://github.com/kellylarrea/Supermarket-Shopper`}>Supermarket Canvas Game Link</a></h3>
                  <img src='/supermarket.png' className='image' alt="Supermarket Image"/>
              </div>
            </div>
        )
    }
}

export default Projects
