import React from 'react'
import './Footer.css'
import Instagram from '../../assets/instagram.png';
import Logo from "../../assets/logo.png";
import Phone from '../../assets/phone.png';
import Gmail from '../../assets/gmail.png';
function Footer() {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
            <a href="tel:7408867101">
  <img src={Phone} alt="Phone" style={{ width: '30px', height: '30px' }} />
</a>

            {/* < img src={Phone} alt="" /> */}
            <a href="https://www.instagram.com/thefalconfitness/">
  <img src={Instagram} alt="" style={{ width: '30px', height: '30px' }}/>
</a>
            {/* <img src={Instagram} alt="" /> */}
            <img src={Gmail} alt="" />
   

        </div>
       <div className="address">
        <span>The Falcon Fitness Gym, Katyani tower near sbi main branch , civil lines , Jaunpur, 222002</span>
       </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
    </div>
    <div className="blur blur-f-1"></div>
    <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer