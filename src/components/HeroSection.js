import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/hero2.mp4' autoPlay loop muted />
      <h1>BASKETBALL GAMING AWAITS</h1>
      <p>The home of leading sports
betting in the Philippines.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          EXPLORE <i className="fa fa-play" />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;
