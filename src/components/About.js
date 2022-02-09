import React from 'react'
import Resume from '../Resume-MikeKohlberg.pdf'

const About = () => {
  return (
    <div>
      <br/>
      <h2 className='section-title'>About Me</h2>
      <div className='about-container'>
        <div className='about-text'>
          <p>Full stack software developer with experience in mechanical and electrical engineering and PLC programming. My career shift was driven by my passion and aptitude for coding and my desire to make a lasting impact. I am comfortable working with many different types of people in a wide range of settings. I look forward to tackling your toughest bugs.</p>
          <br></br>
          <br></br>
          <div className='links-container'>
            <a href='https://linkedin.com/in/michaelkohlberg'>LinkedIn</a>
            <span> | </span>
            <a href='https://github.com/mgkdn9'>Github</a>
            <span> | </span>
            <a href={Resume} download>Resume</a>
          </div>
        </div>
        <div className='about-img'></div>
      </div>
    </div>
  )
}
export default About