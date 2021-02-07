import React, { Component } from 'react'

class About extends Component {
  render () {
    return(
      <div>
        <h1>Patrick Benjamin Nash</h1>
        <h2>{this.props.about[0].birthplace}</h2>
        <h2>{this.props.about[0].birthLocation}</h2>
        <h2>{this.props.about[0].almaMater}</h2>
        <h2>{this.props.about[0].languages}</h2>
        <h2>{this.props.about[0].astroSign}</h2>
        <h2>{this.props.about[0].info}</h2>
      </div>
    )
  }
}

export default About