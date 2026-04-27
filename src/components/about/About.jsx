import React from 'react'
import './about.css'

//Icons/Assets

import {FaAward} from 'react-icons/fa'
import {AiOutlineFlag} from 'react-icons/ai'
import {FaCode} from 'react-icons/fa'

// import me_pic_2 from '../../assets/portfolio_pfp2.png'
import me_pic_3 from '../../assets/portfolio_pfp3.jpg'

const About = () => {
  return (
    <section id="about" className="about__section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={placeholder_me} alt="About image" /> */}
            {/* <img src={main_me_pic} alt="About image" /> */}
            <img src={me_pic_3} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaCode className="about__icon"/>
              <h5>Seeking</h5>
              <small>A role as a Software Developer/Engineer in a team where I can learn and grow.</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Graduated</h5>
              <small>from the University of St Andrews (Psychology) and later the Career Foundry bootcamp.</small>
            </article>

            <article className="about__card">
              <AiOutlineFlag className="about__icon"/> {/* The icon leftover from when this was nationality. Change */}
              <h5>Competent</h5>
              <small>With Javascript & NodeJS, React, Python, C#, and much more.</small>
            </article>

            {/* <article className="about__card">
              <AiOutlineFlag className="about__icon"/>
              <h5>Nationality</h5>
              <small>Citizen of the US & Sweden, yet culturally British. Fluent in English & conversational in Swedish.</small>
            </article> */}

          </div>

            <p>
              {/* Hey! I'm Ben Schwartz (26), and I'm ready to start my career as a Full-Stack Developer. You'll find me friendly, passionate, and committed both to honing my craft, and to being a great team member. Though the COVID crisis has been a difficult and disruptive time, I've spent the last few years learning new skills and reflecting on what I want from my life and career. I believe I'm now ready to start the next part of my journey, and if you're interested in hiring a web developer, I'd love to talk with you. */}
              Hey! I'm Ben Schwartz (28), and I'm looking for work as a Software Developer or Engineer. I transitioned to IT from Psychology via a full stack Web Development bootcamp, and got my first proper experience working for a systems integration & managed services provider in the IPTV industry. You'll find me to be a eager learner and an excellent team member. If you're looking to expand your team, I'd love to talk with you.
            </p>

            <a href="#contact" className="btn btn-primary">Let's talk!</a>

        </div>

      </div>

    </section>
  )
}

export default About