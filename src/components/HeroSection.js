import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import vid from "../videos/video-1.mp4";

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={vid} autoPlay loop muted />
        <h1>VIVE LA AVENTURA</h1>
        <p>¿A qué esperas?</p>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                EMPIEZA AHORA
            </Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                VER EL TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection