import React from 'react'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaCodepen} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://twitter.com/ToastyBoyPro" target="_blank"><FaTwitterSquare/></a>
      <a href="https://www.linkedin.com/in/robert-park-807780a0/" target="_blank"><FaLinkedin/></a>
      <a href="https://github.com/ToastyBoyPro" target="_blank"><FaGithubSquare/></a>
      <a href="https://codepen.io/ToastyBoyPro" target="_blank"><FaCodepen/></a>
    </div>
  )
}

export default HeaderSocials