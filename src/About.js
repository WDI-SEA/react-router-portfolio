import React from 'react';

const About = () => {
    return (
        <div>
            <h2>About Eliott</h2>
                <div class="card">
                <img className="thumbnail" src={`${process.env.PUBLIC_URL}/images/me.jpeg`} alt="photo of Eliott" />
                <p>
                    <a href="https://www.github.com/fussypuppet" target='_blank'>https://www.github.com/fussypuppet</a>
                </p>
                <p>eliott.davidson@gmail.com</p>
                <p class="list-label">Skills:</p>
                <ul>
                    <li>Napping</li>
                    <li>Chilling with dogs</li>
                    <li>Judging neighbors</li>
                    <li>React someday</li>
                </ul>
            </div>         
            <style jsx>
                {`
                    .thumbnail {
                        margin-top: 25px;
                        height: 180px;
                    }
                `}
            </style>
        </div>
    )
}
export default About;