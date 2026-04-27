import React from 'react'
import './header.css'

//Components
import CTA from './CTA'
import HeaderSocials from './headerSocials'


// Assets
import placeholder_me from '../../assets/placeholder_me.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <div className="header__intro">
          <h5>Hello, I'm</h5>
          <h1>Ben Schwartz</h1>
          <h5 className="text-light">Software Developer</h5>

          <CTA />

        </div>

        {/* <div className="me-img">
          <img src={placeholder_me} alt="Myself" />
        </div> */}
        
        <div className="socials__container">
          <HeaderSocials />
        </div>

      </div>
    </header>
  )
}

export default Header