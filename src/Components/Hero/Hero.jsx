import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
function Hero() {

  const transition={type :'spring', duration:3}

  return (
   <div className="hero" id='home'>
    <div className="blur blur-h"></div>
    <div className="left">
        <Header/>
        <div className='the-best-ad'>
          {/* <motion.div >
           initial={{left:'238px'}}
           whileInView={{left:'8px'}}
           transition={{...transition,type:'tween'}}
          </motion.div> */}
          <motion.div
  initial={{ left: '238px' }}
  animate={{ left: '8px' }}
  transition={{ type: 'tween', ...transition }}
></motion.div>

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
          <span>  <NumberCounter end={1100} start={400} delay='0.4' preFix="+"/></span>
          <span><b>Members satisfied</b></span>
          </div>
          <div>
          <span> <NumberCounter end={1400} start={400} delay='0.4' preFix="+"/></span>
          <span><b>Members Joined</b></span>
          </div>
          <div>
          <span> <NumberCounter end={30} start={1} delay='0.4' preFix="+"/></span>
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
       <motion.div
       initial={{right: '-1rem' }}
       animate={{right: '4rem' }}
       transition={transition} 
       className="heart-rate">
       <img src={Heart} alt="" />
       <span>Heart Rate</span>
       <span>110 bpm</span>
       </motion.div>
      <img src={hero_image} alt="" className="hero-image"/>
      <motion.img 
  src={hero_image_back} 
  alt="" 
  className="hero-image-back"
  initial={{ right: '11rem' }}
  animate={{ right: '20rem' }}
  transition={transition} 
/>

     <motion.div 
     initial={{right: '37rem' }}
     animate={{right: '28rem' }}
     transition={transition} 
     className="calories">
     
     <img src={Calories} alt="" /> <div>
     <span>Calories Burned</span><span>220kcal</span>
     </div>
   </motion.div>
    </div>
   </div>
  )
}

export default Hero