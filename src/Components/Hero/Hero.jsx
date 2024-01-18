import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

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
            <span>Ideal body</span>
          </div>
          <div><span>
          IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
          </span>
            
          </div>
        </div>
        <div className="figures">
          <div>
          <span>+1200</span>
          <span>Members satisfied</span>
          </div>
          <div>
          <span>+1400</span>
          <span>Members Joined</span>
          </div>
          <div>
          <span>+30</span>
          <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className='btn'>Get started</button>
          <button className='btn'>Learn more</button>
        </div>
    </div>
    <div className="right"></div>
   </div>
  )
}

export default Hero