import React, { Component } from 'react'


class Projects extends Component {
    render() {
        return (
            <div>
              <h1>Check out my Project!</h1>
              <div>
              <h3><a href={`https://express-auth-reference.herokuapp.com/`}>Recipe Collector Link</a></h3>
              <img src='/recipe.png' className='recipeImage' alt="Recipe Image"/>
              </div>
              <div>
                  <h3><a href={`https://github.com/kellylarrea/Supermarket-Shopper`}>SuperMarket Game Link</a></h3>
              </div>
            </div>
        )
    }
}

export default Projects
