import React from 'react'
import './nav.css'
import { useState, useEffect } from 'react'

//Icons
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

// start of Hamzas suggested code

const updateActiveNav = (e) => {
  const aboutY =
    document.querySelector("#about").getBoundingClientRect().top + parseFloat(window.scrollY) - 500;
  const skillsY =
    document.querySelector("#skills").getBoundingClientRect().top + parseFloat(window.scrollY) - 500;
  const portfolioY =
    document.querySelector("#portfolio").getBoundingClientRect().top + parseFloat(window.scrollY) - 500;
  const contactY =
    document.querySelector("#contact").getBoundingClientRect().top + parseFloat(window.scrollY) - 500;
  if (document.documentElement.scrollTop <= aboutY) {
    setActiveNav("#");
    return;
  } else if (document.documentElement.scrollTop <= skillsY) {
    setActiveNav("#about");
    return;
  } else if (document.documentElement.scrollTop <= portfolioY) {
    setActiveNav("#skills");
    return;
  } else if (document.documentElement.scrollTop <= contactY) {
    setActiveNav("#portfolio");
    return;
  } else {
    setActiveNav("#contact");
    return;
  }
}

useEffect(() => {
  window.addEventListener("scroll", updateActiveNav);
  return () => {
    window.removeEventListener("scroll", updateActiveNav);
  }
}, [])

  return (

    <nav>
      {/* <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a> */}
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}> <RiServiceLine/> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <BiBook/> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageDetail/> </a>
    </nav>
  )
}

export default Nav


