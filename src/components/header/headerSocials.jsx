import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const headerSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/benjamin-schwartz-993602229/" target="_blank"> <BsLinkedin /> </a>
      <a href="https://github.com/BenSchwartz96" target="_blank"> <FaGithub /> </a>
    </div>
  )
}

export default headerSocials