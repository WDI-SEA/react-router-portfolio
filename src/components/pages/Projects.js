import React from 'react'

const Projects = () => {

  const projectStyle = {
    border: '1px dotted black', 
    textAlign: 'center'
  }
  const picStyle = {
    width: '400px',
    height: '220px',
    margin: '10px'
  }
  const linkStyle = {
    fontSize: '2rem'
  }

  return (
    <div>
      <div style={projectStyle}>
        <h2>PokeClone</h2>
        <p>Roam a field of 'tall grass' and survive as many wild Pokemon encounters as you can. Search your favorite Pokemon or encounter them at random. Prepare yourself for the nostalgia that awaits.</p>
        <img style={picStyle} src='https://i.imgur.com/yRTUORD.png' alt='pokeClone roamView'></img>
        <img style={picStyle} src='https://i.imgur.com/dAMC7Ps.png' alt='pokeClone battleView'></img>
        <div style={linkStyle}><a target="_blank" href='https://mgkdn9.github.io/Pokemon-Fenton-Region/'>Live Link</a></div>
      </div>
      <div style={projectStyle}>
        <h2>OoIHaveThat!</h2>
        <p>Roam a field of 'tall grass' and survive as many wild Pokemon encounters as you can. Search your favorite Pokemon or encounter them at random. Prepare yourself for the nostalgia that awaits.</p>
        <img style={picStyle} src='https://i.imgur.com/yRTUORD.png' alt='pokeClone roamView'></img>
        <img style={picStyle} src='https://i.imgur.com/dAMC7Ps.png' alt='pokeClone battleView'></img>
      </div>
    </div>
  )
}
export default Projects