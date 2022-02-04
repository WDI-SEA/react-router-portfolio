import React from 'react'

const Projects = () => {

  const projectStyle = {
    border: '1px dotted black', 
    textAlign: 'center',
    margin: '5px',
    backgroundColor: 'lightGray'
  }
  const pokePicStyle = {
    width: '400px',
    height: '220px',
    margin: '10px'
  }
  const linkStyle = {
    fontSize: '2rem'
  }
  const picsContainer = {
    display: 'flex',
    alignItems: 'center'
  }
  const toolPicStyle = {
    width: '400px',
    margin: '10px'
  }
  const algoContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const algoPicStyleHome = {
    width: '800px',
    margin: '10px'
  }
  const algoPicStyleTest = {
    width: '300px',
    margin: '10px'
  }

  return (
    <div>

      <div style={projectStyle}>
        <h2>PokeClone</h2>
        <p>Roam a field of 'tall grass' and survive as many wild Pokemon encounters as you can. Search your favorite Pokemon or encounter them at random. Prepare yourself for the nostalgia that awaits.</p>
        <img style={pokePicStyle} src='https://i.imgur.com/yRTUORD.png' alt='pokeClone roamView'></img>
        <img style={pokePicStyle} src='https://i.imgur.com/dAMC7Ps.png' alt='pokeClone battleView'></img>
        <div style={linkStyle}><a target="_blank" href='https://mgkdn9.github.io/PokeClone/'>Live Link!</a></div>
      </div>

      <div style={projectStyle}>
        <h2>OoIHaveThat!</h2>
        <p>Peer to peer tool sharing platform. Broadcast to users near you whenever you need a tool or any kind of service. Also see requests from users nearby and help a neighbor out by renting them a tool while earning some money off all the tools you own.</p>
        <div style={picsContainer}>
          <img style={toolPicStyle} src='https://i.imgur.com/hxgZqnW.png' alt='OoIHaveThat HomePage'></img>
          <img style={toolPicStyle} src='https://i.imgur.com/Dv3jAyj.png' alt='OoIHaveThat ProfilePage'></img>
          <img style={toolPicStyle} src='https://i.imgur.com/v8fmkZ9.png' alt='OoIHaveThat RentAToolPage'></img>
        </div>
        <div style={linkStyle}><a target="_blank" href='https://ooihavethat.herokuapp.com/'>Live Link!</a></div>
      </div>

      <div style={projectStyle}>
        <h2>Reart</h2>
        <p>A subscription service delivers artwork right to your door. Tailored to your unique taste in art, season after season.</p>
        <div style={picsContainer}>
          <img style={toolPicStyle} src='https://i.imgur.com/I26QxxF.png' alt='Reart CreateProfile'></img>
          <img style={toolPicStyle} src='https://i.imgur.com/m8uORlJ.png' alt='Reart FilterdArt'></img>
          <img style={toolPicStyle} src='https://i.imgur.com/59Dkn57.png' alt='Reart Checkout'></img>
        </div>
        <div style={linkStyle}><a target="_blank" href='https://reart.herokuapp.com/'>Live Link!</a></div>
      </div>

      <div style={projectStyle}>
        <h2>AlgoViews</h2>
        <p>Brush up on some common sorting algorithms and see them animated on screen. Then test your knowledge when you feel up to it.</p>
        <div style={algoContainer}>
          <img style={algoPicStyleHome} src='https://i.imgur.com/n9dt1ts.png' alt='AlgoViews Home'></img>
          <img style={algoPicStyleTest} src='https://i.imgur.com/Ob8nwkA.png' alt='AlgoViews Test'></img>
          </div>
        <div style={linkStyle}><a target="_blank" href='https://algo-views-client.herokuapp.com/'>Live Link!</a></div>
      </div>

      <div style={projectStyle}>
        <h2>CounterMeme</h2>
        <p>Placeholder</p>
      </div>

      <div style={projectStyle}>
        <h2>G-Code Gundrill PLC Program</h2>
        <p>Placeholder</p>
      </div>

      <div style={projectStyle}>
        <h2>KCMOMovers.com</h2>
        <p>Placeholder</p>
      </div>


    </div>
  )
}
export default Projects