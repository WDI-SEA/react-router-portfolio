import React from 'react'
import PokeCloneVid3 from '../../videos/PokeCloneVid3.mov'
import AlgoViewsVid1 from '../../videos/AlgoViewsVid1.mov'
import OoIHaveThatVid1 from '../../videos/OoIHaveThatVid1.mov'
import ReartVid1 from '../../videos/ReartVid1.mov'
import KCMOMoversVid1 from '../../videos/KCMOMoversVid1.mov'

export default function ProjectsCarousel(){

  setTimeout(()=>{require('../../vanillaJS/carousel')},10)
  return (
    <div id="reviews__container">

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
                <div className="carousel__text">
                  <video src={PokeCloneVid3} autoplay="true" controls="controls" width="600" height="300" />
                </div>
              </div>
            </li>
            <li className="carousel__slide" style={{left: "1211.19px"}}>
              <div className="carousel__text__container">
                <div className="carousel__text">
                  <video src={AlgoViewsVid1} autoplay="true" controls="controls" width="600" height="300" />
                </div>
              </div>
            </li>
            <li className="carousel__slide" style={{left: "2422.38px"}}>
              <div className="carousel__text__container">
                <div className="carousel__text">
                  <video src={OoIHaveThatVid1} autoplay="true" controls="controls" width="600" height="300" />
                </div>
              </div>
            </li>
            <li className="carousel__slide" style={{left: "3633.56px"}}>
              <div className="carousel__text__container">
                <div className="carousel__text">
                  <video src={ReartVid1} autoplay="true" controls="controls" width="600" height="300" />
                </div>
              </div>
            </li>
            <li className="carousel__slide" style={{left: "4844.75px"}}>
              <div className="carousel__text__container">
                <div className="carousel__text">
                  <video src={KCMOMoversVid1} autoplay="true" controls="controls" width="600" height="300" />
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