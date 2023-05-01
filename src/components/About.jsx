import React from 'react';
import { Link } from "react-router-dom";
import '../App.css'

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About</h2>

      </div>
      <div className="about-grid">
        <div className="about-item">
          <h3>Interviews</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
        </div>
        <div className="about-item">
          <h3>Awards</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
        </div>
        <div className="about-item">
          <h3>Coding Languages</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
        </div>
        <div className="about-item">
          <h3>Written About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
        </div>
      </div>
    </div>
  );
}
