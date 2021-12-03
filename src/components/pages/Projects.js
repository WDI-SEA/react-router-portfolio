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
                    <img className="projImg" src="https://assets.bonappetit.com/photos/5bef239a86ff4441f680c7c4/1:1/w_960,c_limit/slow-roast-beef-02.jpg" alt="Roast Beef Table" />
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