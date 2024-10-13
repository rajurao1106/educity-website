import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className='about-img' alt="" />
        <img src={play_icon} className='play-icon' alt="" onClick={()=>{setPlayState(true)}} />
      </div> 
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing tomorrow leaders today</h2>
        <p>Embark on a transformative educational journey with iur university comphrnsive education programs. Our cutting-edge curriculum is designed to empower students with the knowlrdge, skills, and expressions needed to excel in the dynamic feild of education</p>
        <p>With a focus on innovative, hands-on learning, and persnalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classroom, schools, and communities.</p>
        <p>Whether you aspire to become a teacher , administer, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
