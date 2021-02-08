import React from 'react';

class Home extends React.Component {
  render () {
    let logo = 'https://f4.bcbits.com/img/0013699952_20.jpg'
    return (
      <div className='main_home_container'>
        <h1>sean michael feiner</h1>
        <img src={logo} className="App-logo" alt="GhostStories logo" />
        <div className="home_taglines">
          <h3>Web and Software Engineer</h3>
          <h3>Music Cultures and Software Experiments</h3>
          <h3>Writer, Researcher, Curator</h3>
        </div>
        <img className='main_img' src='https://i.imgur.com/XqswHBj.jpg' alt="art installation" />
      </div>
    )
  }
};

export default Home;