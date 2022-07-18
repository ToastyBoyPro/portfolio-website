import React from 'react'
import './test.css'
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
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste mollitia minima enim, blanditiis laudantium corporis?',
    github: 'https//github.com',
    demo: 'https//github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, earum.',
    github: 'https//github.com',
    demo: 'https//github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, earum.',
    github: 'https//github.com',
    demo: 'https//github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, earum.',
    github: 'https//github.com',
    demo: 'https//github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, earum.',
    github: 'https//github.com',
    demo: 'https//github.com'
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
          1300: {
            slidesPerView: 3
          }
        }}
      >
        {
          projects.map(({id, image, title, description, github, demo}) => {
            return (
              <SwiperSlide key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                  <div className="image__overlay">
                    <h3 className="image__title">{title}</h3>
                    <p className="image__description">{description}</p>
                  </div>
                </div>

                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
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