import React from 'react';
import aboutPic from './IMG_3430.JPG'

const HomePage = () => {
    return (
        <div className = "homePage">
            <h1 className = "intro">Welcome to Eric's Portfolio!</h1>
            <hr/>
            <img className = "aboutPic" src={aboutPic} alt=""/>
        </div>
    );
};

export default HomePage;