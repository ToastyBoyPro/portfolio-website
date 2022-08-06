import React from 'react'
import './portfolio.css'
/* redo pics===================================== */
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
<<<<<<< HEAD
import IMG4 from '../../assets/project4.png'
=======
import IMG4 from '../../assets/project1.png'
import IMG5 from '../../assets/project5.png'
>>>>>>> ac652272046eea9b8ee4426f3f85d92b05759057

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
<<<<<<< HEAD
    title: 'Shoppy Dashboard',
    project: 'Administrative Summary Board',
    style: 'React, APIs, SyncFusion',
    description: 'An admin dashboard featuring interactive revenue charts, Kanban, side panel, calendar, and theme settings.',
    github: 'https://github.com/ToastyBoyPro/dashboard',
    demo: 'https://tbp-dashboard-mockup.netlify.app'
=======
    title: 'Shoppy',
    project: 'Administrator Dashboard',
    style:  'React, Syncfusion components',
    description: 'Included features are theme settings, charts, calendar, Kanban, color picker, revenue analysis, and sidemenu.',
    github: 'https://github.com/ToastyBoyPro/dashboard',
    demo: 'https://tbp-dashboard-mockup.netlify.app/'
>>>>>>> ac652272046eea9b8ee4426f3f85d92b05759057
  },
  {
    id: 2,
    image: IMG2,
<<<<<<< HEAD
    title: 'Centive Investing',
    project: 'Investing Mock Website',
    style: 'React',
    description: 'A customizable website with recycleable components that can be edited to fit your needs.',
=======
    title: 'Centive',
    project: 'Investing Site Mockup',
    style: 'React',
    description: 'A basic website with reuseable components that can be edited to fit your website needs.',
>>>>>>> ac652272046eea9b8ee4426f3f85d92b05759057
    github: 'https://github.com/ToastyBoyPro/Centive---Investing-Mockup',
    demo: 'https://investing-site-mockup.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Fitness Helper',
    project: 'Workout Companion',
<<<<<<< HEAD
    style: 'React, APIs',
    description: 'With over a 1000 exercises, you will never have trouble figuring out a workout again.',
=======
    style: 'React, API',
    description: 'An exercise website to help you tailor your workouts to meet your needs.',
>>>>>>> ac652272046eea9b8ee4426f3f85d92b05759057
    github: 'https://github.com/ToastyBoyPro/fitness-helper',
    demo: 'https://tbp-fitness-app.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
<<<<<<< HEAD
    title: 'Password Generator',
    project: 'Random Password Generator',
    style: 'Javascript, HTML, CSS',
    description: 'Use this handy app to create your unique password of desired length.',
=======
    title: 'Project 4',
    project: 'Hello',
    style: 'Angular',
    description: 'Something great.',
    github: 'https://github.com/ToastyBoyPro',
    demo: 'https://github.com/ToastyBoyPro'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Password Generator',
    project: 'Random Password Generator',
    style: 'JavaScript, HTML, CSS',
    description: 'Creates a unique password based on your specified length.',
>>>>>>> ac652272046eea9b8ee4426f3f85d92b05759057
    github: 'https://github.com/ToastyBoyPro/Password-Generator',
    demo: 'https://tbp-password-generator.netlify.app'
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
<<<<<<< HEAD
                  <div className="portfolio__item-description">
                    <h3>{project}</h3>
                    <p>{style}</p><br></br>
                    <p>{description}</p>
                  </div>
                  <div className="portfolio__item-links">
=======
                  <h3 className='portfolio__item-description'>{project}</h3>
                  <p className='portfolio__item-description'>{style}</p>
                  <p className='portfolio__item-description'>{description}</p>
                  <div className='portfolio__item-links'>
>>>>>>> ac652272046eea9b8ee4426f3f85d92b05759057
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

export default Portfolio