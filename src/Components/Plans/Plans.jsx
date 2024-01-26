import React from 'react'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png';
import plansData from '../../data/plansData';
function Plans() {
  return (
    <div className="plans-container">
       <div className="programs-header">
        <span>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
       </div>
       <div className="plans">
       {plansData.map((plan, index) => (
  <div className="plan" key={index}>
    {plan.icon}
    <span>{plan.name}</span>
    <span>{plan.price}₹</span>
    <div className="features">
      {plan.features.map((feature, index) => (
        <div className="feature" key={index}>
          <img src={whiteTick} alt="" />
          <span key={index}>{feature}</span>
        </div>
      ))}
    </div>
    <div><span>See more benefits ->  </span></div>
    <button className="btn">Join Now</button>
  </div>
))}
       </div>
    </div>
  );
};

export default Plans