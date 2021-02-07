import React, { Component } from 'react'


class Home extends Component {
  render() {
    return(
      <div>
        <h1>Patrick Benjamin Nash</h1>
        <p><img style={{marginLeft: '25vw', marginRight: '25vw', maxHeight: '40vh', maxWidth: '40vw'}} src={this.props.homeContent[0].image} /></p>
        <p>{this.props.homeContent[0].about}</p>
        {this.props.homeContent[0].favoritePhrases.map((phrase, index) =>(
          <h3 key={`${index}`}>{phrase}</h3>
        ))}
      </div>
    )
  }
}

export default Home