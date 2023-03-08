import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/matin-najafov-30a543207/" target='_blanc'><BsLinkedin/></a>
            <a href="https://github.com/MatinJN" target='_blanc'><FaGithub/></a>
            <a href="https://www.linkedin.com/in/matin-najafov-30a543207/" target='_blanc'></a>
        </div>
    )
 }

export default HeaderSocials