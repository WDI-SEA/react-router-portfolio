import React, { useState, useEffect } from "react";
import '../App.css'
import quoteVideoLight from '../assets/quote.mp4'
import quoteVideoDark from '../assets/quotedarkmode.mp4'

export default function Home() {
const theme = localStorage.getItem('theme')
  
  return (
    <div>
      <video className="quote-video" autoPlay muted loop>
        <source src={theme === "light" ? quoteVideoLight : quoteVideoDark} type="video/mp4" />
      </video>
      <div className="grid-container">
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 4</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 5</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 6</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 7</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 8</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 9</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 10</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 11</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-item">
          <img className="placeholder-img" src="https://via.placeholder.com/350x200" alt="placeholder" />
          <h2>Project 12</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}
