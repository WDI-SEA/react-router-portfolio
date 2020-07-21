import React from 'react';
import Marvel1 from './pics/Marvel1.png';
import Marvel2 from './pics/Marvel2.png';
import Memory1 from './pics/Memory1.png';
import Memory2 from './pics/Memory2.png';


const Projects = () => {
    return (
        <div className = "projectpage">
            <h1> Check out my work!</h1>
            <div className="p2">
                <p> <a href="https://github.com/salman5436/P2-Marvel">Marvel Pick Em'</a>: This was my project in General Assembly that implmented Node, Express, Javascript, SQL, CSS. and more! </p>
                <img src={Marvel1} height="500" width="700" alt="marvel pick em website screenshot that I created using Node, Express, SQl, Javascript, and CSS" />
                <img src={Marvel2} height="490" width="700" alt="marvel pick em website screenshot that I created using Node, Express, SQl, Javascript, and CSS" />
            </div>
            <div className="p1">
                <p> <a href="https://github.com/salman5436/Memory-Matching-Bonanza">The Memory Matching Bonanza</a>: This was my project in General Assembly that implmented Node, Express, Javascript, SQL, CSS. and more! </p>
                <img src={Memory1} height="500" width="700" alt="Memory Matching card game screenshot that I created using Javascript, CSS, HTML, and more" />
                <img src={Memory2} height="490" width="700" alt="Memory Matching card game screenshot that I created using Javascript, CSS, HTML, and more" />
            </div>
        </div>
    )
}

export default Projects