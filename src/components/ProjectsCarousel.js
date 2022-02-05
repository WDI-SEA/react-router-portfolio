import React from 'react'
import PokeCloneVid3 from '../videos/PokeCloneVid3.mov'
import AlgoViewsVid1 from '../videos/AlgoViewsVid1.mov'
import OoIHaveThatVid1 from '../videos/OoIHaveThatVid1.mov'
import ReartVid1 from '../videos/ReartVid1.mov'
import KCMOMoversVid1 from '../videos/KCMOMoversVid1.mov'

export default function ProjectsCarousel(){

  setTimeout(()=>{require('../vanillaJS/carousel')},10)
  return (
    <div id="projects__container">

      <div className="carousel">

        <button className="carousel__button carousel__button--left is-hidden">
          <img src="https://i.imgur.com/UiUhUQW.png"/>
        </button>

        <div className="carousel__track-container">
          <ul className="carousel__track">
            <li className="carousel__slide current-slide" style={{left: "0px"}}>
              <div className="carousel__text__container">
                {/* <h3 className="carousel__text__author">Harry Randy B.</h3>
                <br/>
                <h2 className="carousel__text">
                  "These men were very professional, courteous, and diligent at their task through completion. I have used several people in different states through the years. I would certainly rate these as the best."
                </h2> */}
                <div>
                  <h2 className='project-title '>PokeClone</h2>
                  <p className='project-description carousel__text'>Roam a field of 'tall grass' and survive as many wild Pokemon encounters as you can. Search your favorite Pokemon or encounter them at random. Prepare yourself for the nostalgia that awaits.</p>
                  <video src={PokeCloneVid3} autoplay="true" controls="controls" width="600" height="300" />
                  <a className='project-link' target="_blank" href='https://mgkdn9.github.io/PokeClone/'>Live Link</a>
                  <a className='project-github' target='_blank' href='https://github.com/mgkdn9/PokeClone'>Github Repo</a>
                </div>
              </div>
            </li>
            <li className="carousel__slide" style={{left: "1211.19px"}}>
              <div className="carousel__text__container">
                <div>
                  <h2 className='project-title'>AlgoViews</h2>
                  <p className='project-description'>Brush up on some common sorting algorithms and see them animated on screen. Then test your knowledge when you feel up to it.</p>
                  <video src={AlgoViewsVid1} autoplay="true" controls="controls" width="600" height="300" />
                  <a className='project-link' target="_blank" href='https://algo-views-client.herokuapp.com/'>Live Link!</a>
                  <a className='project-github' target='_blank' href='https://github.com/mgkdn9/sorting_algorithm_visualizer'>Github Repo</a>
                </div>
              </div>
            </li>
            <li className="carousel__slide" style={{left: "2422.38px"}}>
              <div className="carousel__text__container">
                <div>
                  <h2 className='project-title'>OoIHaveThat</h2>
                  <p className='project-description'>Peer to peer tool sharing platform. Broadcast to users near you whenever you need a tool or any kind of service. Also see requests from users nearby and help a neighbor out by renting them a tool while earning some money off all the tools you own.</p>
                  <video src={OoIHaveThatVid1} autoplay="true" controls="controls" width="600" height="300" />
                  <a className='project-link' target="_blank" href='https://ooihavethat.herokuapp.com/'>Live Link!</a>
                  <a className='project-github' target='_blank' href='https://github.com/mgkdn9/OoIHaveThat'>Github Repo</a>
                </div>
              </div>
            </li>
            <li className="carousel__slide" style={{left: "3633.56px"}}>
              <div className="carousel__text__container">
                <div>
                  <h2 className='project-title'>Reart</h2>
                  <p className='project-description'>A subscription service delivers artwork right to your door. Tailored to your unique taste in art, season after season.</p>
                  <video src={ReartVid1} autoplay="true" controls="controls" width="600" height="300" />
                  <a className='project-link' target="_blank" href='https://reart.herokuapp.com/'>Live Link!</a>
                  <a className='project-github' target='_blank' href='https://github.com/mgkdn9/Re-Art-Client'>Github Repo</a>
                </div>
              </div>
            </li>
            <li className="carousel__slide" style={{left: "4844.75px"}}>
              <div className="carousel__text__container">
                <div>
                  <h2 className='project-title'>KCMOMovers Website</h2>
                  <p className='project-description'>Personal company website for marketing purposes as well as coding practice.</p>
                  <video src={KCMOMoversVid1} autoplay="true" controls="controls" width="600" height="300" />
                  <a className='project-link' target="_blank" href='https://KCMOMovers.com/'>Live Link!</a>
                  <a className='project-github' target='_blank' href='https://github.com/mgkdn9/KCMOMoversWebsite'>Github Repo</a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <button className="carousel__button carousel__button--right">
          <img src="https://i.imgur.com/p8SFtmi.png"/>
        </button>

        <div className="carousel__nav">
          <button className="carousel__indicator current-slide"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
        </div>
      </div>
    </div>
  )
}