import React, { Component } from 'react'

class About extends Component {
  render () {
    return(
      <div>
        <h1>Patrick Benjamin Nash</h1>
        <p><img style={{marginLeft: '25vw', marginRight: '25vw', maxHeight: '40vh', maxWidth: '40vw'}} src={this.props.about[0].image} /></p>
        <h2>{this.props.about[0].astroSign}</h2>
        <h3>{this.props.about[0].birthplace}</h3>
        <h3>{this.props.about[0].birthLocation}</h3>
        <h3>{this.props.about[0].almaMater}</h3>
        <h4>{this.props.about[0].languages}</h4>
        <p style={{fontSize: '27px', marginLeft: '25vw', marginRight: '25vw'}} >{this.props.about[0].info}</p>
      </div>
    )
  }
}

export default About