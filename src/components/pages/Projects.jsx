export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project1"><a href="https://www.superbackfootball.com">
                <div className="imageDiv">
                    <img className="football grass" src="/grass_texture.png" />
                    <img className="football logos" src="/gameStart.png" />
                </div>
                <h2>Superback Football</h2>
            </a>
                <p className="projectText"> An exciting sidescrolling canvas game built with pure javascript, HTML and CSS. Score as many touchdowns as you can!</p>
            </div>
            <div className="project2"><a href="https://correl8.herokuapp.com/">
                <div className="imageDiv">
                    <img className="correl8Img" src="/correl8_black.png" />
                </div>
                <h2>correl8</h2>
            </a>
                <p className="projectText">correl8 is more than just a habit tracker. In addition to habits, track your mood, weather and sleep. Ultimately guiding you to correlations between these items and your daily mental health. </p>
            </div>
        </div>

    )
}