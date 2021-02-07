import React, { Component } from 'react'

class About extends Component {
  render () {
    return(
      <div>
        <h1>Patrick Benjamin Nash</h1>
        <h2>{this.props.about.birthplace}</h2>
        <h2>{this.props.about.birthLocation}</h2>
        <h2>{this.props.about.almaMater}</h2>
        <h2>{this.props.about.languages}</h2>
        <h2>{this.props.about.astroSign}</h2>
        <h2>{this.props.about.info}</h2>
      </div>
    )
  }
}

export default About