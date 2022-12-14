import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaCodepen} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Toasty Boy Productions</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/robert-park-807780a0/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/ToastyBoyPro" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://twitter.com/ToastyBoyPro" target="_blank" rel="noreferrer"><FaTwitter/></a>
        <a href="https://codepen.io/ToastyBoyPro" target="_blank" rel="noreferrer"><FaCodepen/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Toasty Boy Productions. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer