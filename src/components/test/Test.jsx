import React from 'react'
import './test.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'

// import Swiper core and required modules
import { Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Shoppy Dashboard',
    project: 'Administrative Summary Board',
    style: 'React, APIs, SyncFusion',
    description: 'An admin dashboard featuring interactive revenue charts, Kanban, side panel, calendar, and theme settings.',
    github: 'https://github.com/ToastyBoyPro/dashboard',
    demo: 'https://tbp-dashboard-mockup.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Centive Investing',
    project: 'Investing Mock Website',
    style: 'React',
    description: 'A customizable website with recycleable components that can be edited to fit your needs.',
    github: 'https://github.com/ToastyBoyPro/Centive---Investing-Mockup',
    demo: 'https://investing-site-mockup.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Fitness Helper',
    project: 'Workout Companion',
    style: 'React, APIs',
    description: 'With over a 1000 exercises, you will never have trouble figuring out a workout again.',
    github: 'https://github.com/ToastyBoyPro/fitness-helper',
    demo: 'https://tbp-fitness-app.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Password Generator',
    project: 'Random Password Generator',
    style: 'Javascript, HTML, CSS',
    description: 'Use this handy app to create your unique password of desired length.',
    github: 'https://github.com/ToastyBoyPro/Password-Generator',
    demo: 'https://tbp-password-generator.netlify.app'
  }
]

const Test = () => {
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
          projects.map(({id, image, title, project, style, description, github, demo}) => {
            return (
              <SwiperSlide key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className="portfolio__item-title">
                  <h3>{title}</h3>
                </div>
                <div className="portfolio__item-cta">
                  <div className="portfolio__item-description">
                    <h3>{project}</h3>
                    <p>{style}</p><br></br>
                    <p>{description}</p>
                  </div>
                  <div className="portfolio__item-links">
                    <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                    <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Test