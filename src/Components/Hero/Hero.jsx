import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

function Hero() {
  return (
   <div className="hero">
    <div className="left">
        <Header/>
        <div className='the-best-ad'>
          <div></div>
          <span>The Best Fitness Club in the Town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text' >Shape </span>
              
              <span>
             Your 
              </span>
          </div>
          <div>
            <span>PERFECT body</span>
          </div>
          <div><span>
          IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR PERFECT BODY AND LIVE UP YOUR LIFE TO FULLEST
          </span>
            
          </div>
        </div>
        <div className="figures">
          <div>
          <span>+1200</span>
          <span><b>Members satisfied</b></span>
          </div>
          <div>
          <span>+1400</span>
          <span><b>Members Joined</b></span>
          </div>
          <div>
          <span>+30</span>
          <span><b>fitness programs</b></span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className='btn'>Get started</button>
          <button className='btn'>Learn more</button>
        </div>
    </div>
    <div className="right">

       <button className="btn">join now</button>
       <div className="heart-rate">
       <img src={Heart} alt="" />
       <span>Heart Rate</span>
       <span>110 bpm</span>
       </div>
      <img src={hero_image} alt="" className="hero-image"/>
    <img src={hero_image_back} alt="" className="hero-image-back" />
     <div className="calories">
     <img src={Calories} alt="" />
     <span>Calories Burned</span><span>220kcal</span>
     </div>
   
    </div>
   </div>
  )
}

export default Hero