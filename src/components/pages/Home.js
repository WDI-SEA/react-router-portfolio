import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Patrick Benjamin Nash</h1>
        <h2>{this.props.homeContent.image}</h2>
        <h2>{this.props.homeContent.about}</h2>
        {this.props.homeContent.favoritePhrases.map((phrase, index) =>(
          <h2 key={`${index}`}>{phrase}</h2>
        ))}
      </div>
    )
  }
}

export default Home