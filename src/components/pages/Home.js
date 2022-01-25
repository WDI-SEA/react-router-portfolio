import React from 'react'

const Home = () => {
  return (
    <div>
      <header>
        <nav>Navbar</nav>
      </header>
      <main>
        <h2>Projects</h2>
        <div id="reviews__container">
          <div className="carousel">

            <button className="carousel__button carousel__button--left is-hidden">
              <img src="leftArrow.PNG"/>
            </button>

            <div className="carousel__track-container">
              <ul className="carousel__track">
                <li className="carousel__slide current-slide" style={{left: "0px;"}}>
                  <div className="carousel__text__container">
                    <h3 className="carousel__text__author">Harry Randy B.</h3>
                    <br/>
                    <h2 className="carousel__text">
                      "These men were very professional, courteous, and diligent at their task through completion. I have used several people in different states through the years. I would certainly rate these as the best."
                    </h2>
                  </div>
                </li>
                <li className="carousel__slide" style={{left: "1211.19px;"}}>
                  <div className="carousel__text__container">
                    <h3 className="carousel__text__author">Jeff M.</h3>
                    <br/>
                    <h2 className="carousel__text">
                      "They did a fantastic job! Very efficient, and it's obvious they have a lot of experience moving folks. Everything was packed so well that I didn't hear a single rattle while driving the truck."
                    </h2>
                  </div>
                </li>
                <li className="carousel__slide" style={{left: "2422.38px;"}}>
                  <div className="carousel__text__container">
                    <h3 className="carousel__text__author">Jeff M.</h3>
                    <br/>
                    <h2 className="carousel__text">
                      "Second move with these guys, and it was rad. Everything we threw at them, they handled with muscle and professionalism. Can't recommend them enough."
                    </h2>
                  </div>
                </li>
                <li className="carousel__slide" style={{left: "3633.56px;"}}>
                  <div className="carousel__text__container">
                    <h3 className="carousel__text__author">Susan S.</h3>
                    <br/>
                    <h2 className="carousel__text">
                      "Mike and his crew were amazing! Such polite and hard working guys. Made our move so much less stressful."
                    </h2>
                  </div>
                </li>
                <li className="carousel__slide" style={{left: "4844.75px;"}}>
                  <div className="carousel__text__container">
                    <h3 className="carousel__text__author">David K.</h3>
                    <br/>
                    <h2 className="carousel__text">
                      "Very polite professional and on time. Would recommend them highly once again to help move. Daniel and Saul. Excellent people to work with."
                    </h2>
                  </div>
                </li>
                <li className="carousel__slide" style={{left: "6055.94px;"}}>
                  <div className="carousel__text__container">
                    <h3 className="carousel__text__author">Matthew D.</h3>
                    <br/>
                    <h2 className="carousel__text">
                      "Worked very fast and moved with purpose. Overall very pleased with experience and will definitely recommend."
                    </h2>
                  </div>
                </li>
                <li className="carousel__slide" style={{left: "7267.12px;"}}>
                  <div className="carousel__text__container">
                    <h3 className="carousel__text__author">Shawn T.</h3>
                    <br/>
                    <h2 className="carousel__text">
                      "The guys were awesome!! So glad we used the service. Highly recommended."
                    </h2>
                  </div>
                </li>
                <li className="carousel__slide" style={{left: "8478.31px;"}}>
                  <div className="carousel__text__container">
                    <h3 className="carousel__text__author">Ashley S.</h3>
                    <br/>
                    <h2 className="carousel__text">
                      "Did a fantastic job. Very efficient in both time and in using the space in the truck. Would use again in the future."
                    </h2>
                  </div>
                </li>
                <li className="carousel__slide" style={{left: "9689.5px;"}}>
                  <div className="carousel__text__container">
                    <h3 className="carousel__text__author">Barry S.</h3>
                    <br/>
                    <h2 className="carousel__text">
                      "These guys were very cautious with our furniture and were very professional. They were personable and worked very efficiently. I will use them every time we need any future moving assistance."
                    </h2>
                  </div>
                </li>
              </ul>
            </div>

            <button className="carousel__button carousel__button--right">
              <img src="rightArrow.PNG"/>
            </button>

            <div className="carousel__nav">
              <button className="carousel__indicator current-slide"></button>
              <button className="carousel__indicator"></button>
              <button className="carousel__indicator"></button>
              <button className="carousel__indicator"></button>
              <button className="carousel__indicator"></button>
              <button className="carousel__indicator"></button>
              <button className="carousel__indicator"></button>
              <button className="carousel__indicator"></button>
              <button className="carousel__indicator"></button>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}
export default Home