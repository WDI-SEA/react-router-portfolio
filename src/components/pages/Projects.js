import React, { Component } from 'react'

class Projects extends Component {
    render () {
        return (
            <div className="pageDiv">
                <h1 className="pageTitle">Projects</h1>

                <div className="proj">

                    <h3 className="projTitle">Thanksgiving Dinner: Turkey</h3>
                    <img className="projImg" src="https://www.gannett-cdn.com/presto/2020/11/12/NPAL/ba7f0ac9-1a81-40ae-9bde-5a308f3541f2-tpl-letseatturkey.jpg?width=1320&height=882&fit=crop&format=pjpg&auto=webp" alt="Thanksgiving Table" />
                    <div className="projDeets">
                        <span className="pDt">Tech Stack: Kenmore, Maytag</span>
                        <span className="pDt">Timeframe: 38 hours</span>
                    </div>
        
                </div>
                <div className="proj">
                    <h3 className="projTitle">Christmas Dinner: Roast Beef</h3>
                    <img className="projImg" src="https://realfood.tesco.com/media/images/RFO-1400x919-Slow-roasted-beef-with-mustard-potatoes-dec8429a-d847-469f-a752-5d789755ea17-0-1400x919.jpg" alt="Roast Beef Table" />
                    <div className="projDeets">
                        <span className="pDt">Tech Stack: Whirlpool, Kenmore, Maytag</span>
                        <span className="pDt">Timeframe: 14 hours</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects