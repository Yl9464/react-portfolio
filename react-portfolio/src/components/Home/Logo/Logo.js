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

import './Logo.scss'

const Logo = () => {
  return (
    <div className="logo-row">
      <div className='logo-columns'>
      <img className="API" src={API} alt="API-logo" />
      <img className="Chai" src={Chai} alt="Chai-logo" />
      <img className="CSS" src={CSS} alt="CSS-logo" />
      <img className="HTML" src={HTML} alt="HTML-logo" />
      <img className="JavaScript" src={JavaScript} alt="JS-logo" />
      <img className="Mocha" src={Mocha} alt="Mocha-logo" />
      <img className="MySQL" src={MySQL} alt="MySQL-logo" />
      <img className="Node" src={Node} alt="Node-logo" />
      <img className="Postman" src={Postman} alt="Postman-logo" />
      <img className="Sequelize" src={Sequelize} alt="Sequelize-logo" />
      </div>
    </div>
  )
}

export default Logo
