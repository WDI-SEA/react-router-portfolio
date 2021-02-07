import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Patrick Benjamin Nash</h1>
        <h2>{this.props.homeContent[0].image}</h2>
        <h2>{this.props.homeContent[0].about}</h2>
        {this.props.homeContent[0].favoritePhrases.map((phrase, index) =>(
          <h3 key={`${index}`}>{phrase}</h3>
        ))}
      </div>
    )
  }
}

export default Home