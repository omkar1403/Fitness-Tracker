// src/AboutUs.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './AboutUs.css';
import fit23 from "../utils/Images/fit2.jpg";

const AboutUs = () => {
  return (
    <div
      className="about-us"
      style={{
        backgroundImage: `url(${fit23})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      }}
    >
      <div className="content">
        <h1>About Us</h1>
        <p>Welcome to FitTrack, your go-to app for tracking your fitness journey. Our mission is to help you stay motivated and reach your fitness goals. 🏋️‍♂️</p>
        <p>With FitTrack, you can easily log your workouts, monitor your progress, and stay on top of your health. Join us and become part of a community dedicated to fitness and well-being. 🌟</p>
        <p>Whether you are just starting out or are a seasoned athlete, FitTrack has the tools and features to help you succeed. 💪</p>
       
        <div className="social-media">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="mailto:contact@fittrack.com">
            <FontAwesomeIcon icon={faGoogle} className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
