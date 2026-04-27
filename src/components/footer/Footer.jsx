import React from 'react'
import './footer.css'

import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Ben Schwartz</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#details">Details</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/benjamin.schwartz.98/" target='_blank'> <BsFacebook/> </a>
        <a href="https://www.linkedin.com/in/benjamin-schwartz-993602229/" target='_blank'> <BsLinkedin/> </a>         
        <a href="https://github.com/BenSchwartz96" target='_blank'> <FaGithub/> </a>         
      </div>



    </footer>
  )
}

export default Footer