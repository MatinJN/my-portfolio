import React from 'react'
import './about.css'
import IMG from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experince</h5>
              <small>1+ yerars Working</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>

          <p>As a Junior Front-End Developer, | am eager to bring my HTML, CSS, and JavaScript skills to the table. | am well-versed in React and have a basic understanding of Node.js, Express.js, and MongoDB. My strong web design and development foundation is evident in my ability to create responsive and user-friendly websites using Bootstrap, Tailwind, and Sass. | am a quick learner and am constantly looking to expand my skill set, including experience with state management using Redux and Agile methodologies. | am confident in my abilities to deliver high-quality projects and am eager to contribute to a team environment.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About