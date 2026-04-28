import './about.css'

//Icons/Assets

import {FaAward} from 'react-icons/fa'
import {AiOutlineFlag} from 'react-icons/ai'
import {FaCode} from 'react-icons/fa'

// import me_pic_2 from '../../../assets/portfolio_pfp2.png'
import me_pic_3 from '../../../assets/portfolio_pfp3.jpg'

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
              <small>To grow my talents in game development and give back to the industry that I love.</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Graduated</h5>
              <small>from the University of St Andrews (Psychology) and later the Career Foundry bootcamp.</small>
            </article>

            <article className="about__card">
              <AiOutlineFlag className="about__icon"/> {/* The icon leftover from when this was nationality. Change */}
              <h5>Experienced</h5>
              <small>With web development, Python, and Godot.</small>
            </article>

            {/* <article className="about__card">
              <AiOutlineFlag className="about__icon"/>
              <h5>Nationality</h5>
              <small>Citizen of the US & Sweden, yet culturally British. Fluent in English & conversational in Swedish.</small>
            </article> */}

          </div>

            <p>
              Hello there! I'm Ben Schwartz (29), an aspiring game developer. This portfolio site is still in-progress, but if you've found your way here anyway, welcome! I've followed a winding path to where I am today - from studying Psychology, to transitioning into Web Development, to becoming a Software Engineer before having to quit due to health issues. I've since been working on game development in a mostly hobbyist capacity, but I'm incredibly eager to work on bigger projects with real teams and help you build something.
            </p>

            <a href="#contact" className="btn btn-primary">Let's talk!</a>

        </div>

      </div>

    </section>
  )
}

export default About