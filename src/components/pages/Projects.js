import React, { Component } from 'react'

class Projects extends Component {
    render () {
        return (
            <div className="pageDiv">
                <h1>Projects</h1>

                <h3>Thanksgiving Dinner: Turkey</h3>
                <img src="https://www.gannett-cdn.com/presto/2020/11/12/NPAL/ba7f0ac9-1a81-40ae-9bde-5a308f3541f2-tpl-letseatturkey.jpg?width=1320&height=882&fit=crop&format=pjpg&auto=webp" alt="Thanksgiving Table" />
                <ul>
                    <li>Tech Stack: Kenmore, Maytag</li>
                    <li>Timeframe: 18 hours</li>
                </ul>

                <h3>Christmas Dinner: Roast Beef</h3>
                <img src="https://assets.bonappetit.com/photos/5bef239a86ff4441f680c7c4/1:1/w_960,c_limit/slow-roast-beef-02.jpg" alt="Roast Beef Table" />
                <ul>
                    <li>Tech Stack: Whirlpool, Kenmore, Maytag</li>
                    <li>Timeframe: 14 hours</li>
                </ul>
            </div>
        )
    }
}

export default Projects