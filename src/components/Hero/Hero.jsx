import React from 'react'
import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW COLLECTIONS</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>Explore Fresh</p>
                {/* <img src={hand_icon} alt=""/> */}
            </div>
            <p>Styles For</p>
            <p>Every Occasion</p>
        </div>
        <div className="hero-latest-btn">
            <div>Newest Styles</div>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
    <div className='hero-right'>
        <img src={hero_img} alt=''/>
    </div>
    </div>
  )
}

export default Hero
