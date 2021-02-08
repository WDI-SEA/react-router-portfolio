import React from 'react';


class About extends React.Component {
  constructor (props) {
    super(props)
  }
  handleClick=""
  render () {
    return (
      <div className='main_about_container'>
        <h1>about</h1>
        <div className='abt_brand'>
          <h4>
            I am a developer, writer, curator and artist with a passion for emergent art and music technologies and the cultures and platforms they generate. As a digital and performative creative my expertise is developed through research, dynamic and agile problem solving, and project devleopment and management, with expertise in the  academic, music, nightlife, and tech industries.

          </h4>
        </div>
        <div className='abt_skills'>
          <h3> {`LANGUAGES & FRAMEWORKS`}</h3>
          <h4>HTML, CSS, JavaScript, Python, SQL, Mongodb
          </h4>
          <p>Reactjs, Nextjs, Vue, Express EJS, Node, Sequelize, Mongoose, Flask, Alchemy</p>
          <h3> SKILLS </h3>
          <h4>Longform, site-specfic, and ethoographic Reasearch; Writing; Art and Digital Curation; Video; Installation; Sound Design; Digital Practices</h4>
          <p>Event Planning, Tech Writing, Copy, Video Editing and Post-Production, Sountracking, Sound Design, Processing, Arduino, Physical Computing, MAX / MSP, Jitter, Pd </p>
          <h3>RESEARCH</h3>
          <h4>Emergent community technologies and platforms in the music and nightlife community. Decentralized community-based / guild health insurance and coverage.</h4>
        </div>
        <div className='abt_contact'>
          <h2> Contact me:</h2>
          <ul className='contact_list'>
            <li>
              <a href="mailto:seanfeiner.brown@gmail.com">{`Email 📧   |`}</a>
            </li>
            <li>
              <a href="tel:516-314-6038">{`   Phone 📲   `}</a>
            </li>
            <li>
              <a href="https://github.com/sameghosts">{`|   🐙 🐈  Github  🖥 `}</a>
            </li>

          </ul>
          <h2>Resume: </h2>
          <a href="deadlink" downloads>
            <button> Download </button>
          </a>
        </div>
      </div>
    )
  }
};

export default About;