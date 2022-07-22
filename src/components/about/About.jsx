import React from 'react'
import './about.css'
import ME from '../../assets/About-Me-Pic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Freelance</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <h3 className='hook'>When was the last time you said, <em>"Wow! That's a good-looking website!"?</em></h3>
          <p>I am a seasoned water purification chemist turned web developer specializing in implementing visually-stimulating and interactive web applications to bring clients increased traffic. 
          </p>
          <p>  
            Let me know how I can help YOU with YOUR next project!
          </p>

          <a href="#contact" className='btn btn-primary btn-about'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About