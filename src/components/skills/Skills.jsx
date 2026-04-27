import React from 'react'
import './skills.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
      <h5></h5>
      <h2>My Skills</h2>

      <div className="container skills__container">

  
        {/* START OF FRONT-END SECTION */}
        <div className="skills__coding">
          <h3>Coding</h3>
          <div className="skills__content">
          
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF CODING SECTION */}

        {/* START OF FRONT-END SECTION */}
        <div className="skills__frontend">
          <h3>Front-End Development</h3>
          <div className="skills__content">
          
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT-END SECTION */}

        {/* START OF BACK-END SECTION */}
        <div className="skills__backend">
          <h3>Back-End Development</h3>
          <div className="skills__content">
            
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light"></small>
              </div>
            </article>

            {/* <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light"></small>
              </div>
            </article> */}

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>OAuth2</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACK-END SECTION */}

        {/* START OF TESTS SECTION */}
        <div className="skills__tests">
          <h3>Tests</h3>
          <div className="skills__content">

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Enzyme</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Jest</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Jest Cucumber </h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Puppeteer</h4>
                <small className="text-light"></small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF TESTS SECTION */}

        {/* START OF MOBILE SECTION */}
        <div className="skills__mobile">
          <h3>Mobile Development</h3>
          <div className="skills__content">

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Expo</h4>
                <small className="text-light"></small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF MOBILE SECTION */}

        {/* START OF OTHER SECTION */}
        <div className="skills__other">
          <h3>Other Skills</h3>
          <div className="skills__content">

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Adobe Premiere Pro</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Adobe After-Effects</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Basic Statistics</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>JSDoc</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>TypeDoc</h4>
                <small className="text-light"></small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF OTHER SECTION */}

      </div>
    </section>
  )
}

export default Skills