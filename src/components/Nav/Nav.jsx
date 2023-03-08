import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiFillProject} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
const Nav = () => {
  const [activeNav, setActivenav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActivenav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActivenav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActivenav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={() => setActivenav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillProject/></a>
      <a href="#contact" onClick={() => setActivenav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav