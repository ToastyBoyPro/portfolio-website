import React from 'react'
import './portfolio.css'
/* redo pics===================================== */
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project1.png'
import IMG3 from '../../assets/project1.png'
import IMG4 from '../../assets/project1.png'
import IMG5 from '../../assets/project1.png'

// import Swiper core and required modules
import {Mousewheel, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'


/* Adjust info===================== */
const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Password Generator',
    github: 'https://github.com/ToastyBoyPro/Password-Generator',
    demo: 'https://tbp-password-generator.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project 2',
    github: 'https://github.com/ToastyBoyPro',
    demo: 'https://github.com/ToastyBoyPro'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project 3',
    github: 'https://github.com/ToastyBoyPro',
    demo: 'https://github.com/ToastyBoyPro'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project 4',
    github: 'https://github.com/ToastyBoyPro',
    demo: 'https://github.com/ToastyBoyPro'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project 5',
    github: 'https://github.com/ToastyBoyPro',
    demo: 'https://github.com/ToastyBoyPro'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper className="container portfolio__container"
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{clickable: true}}
        modules={[Mousewheel, Pagination]}
        breakpoints = {{
          // >= 1024px
          1024: {
            slidesPerView: 2
          },
          // >= 1300px
          1350: {
            slidesPerView: 3
          }
        }}
      >
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <SwiperSlide key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Portfolio