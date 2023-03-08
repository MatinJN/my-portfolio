import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: '',
      github: 'https://github.com/MatinJN/MERIN-Full',
      demo: ''
    },
    {
      id: 2,
      image: IMG2,
      title: '',
      github: 'https://github.com/MatinJN/defendo-project',
      demo: 'https://defendovb.az/'
    },
  ]

  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolioooo</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn ' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio