import { useEffect, useRef } from 'react'
import API from '../../../assets/images/API.png'
import Chai from '../../../assets/images/Chai.png'
import CSS from '../../../assets/images/CSS.png'
import HTML from '../../../assets/images/HTML.png'
import JavaScript from '../../../assets/images/JS.png'
import Mocha from '../../../assets/images/Mocha.png'
import MySQL from '../../../assets/images/MySQL.png'
import Node from '../../../assets/images/Node.png'
import Postman from '../../../assets/images/Postman.png'
import React from '../../../assets/images/React.png'
import Sequelize from '../../../assets/images/Sequelize.png'
import AllLogos from '../../../assets/images/Logos.png'
import './Logo.scss'

const Logo = () => {
  return (
    <div className="Logos">
      <img className='All-logos' src={AllLogos} alt='All-logos' />
    </div>
  )
}

export default Logo
