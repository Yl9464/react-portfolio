import './Logo.scss'
import { useEffect, useRef } from 'react'
import {
  faHtml5,
  faGithub,
  faReact,
  faNodeJs,
  faCss3,
  faJs
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//import API from '../../../assets/images/API.png'
//import Chai from '../../../assets/images/Chai.png'
//import Mocha from '../../../assets/images/Mocha.png'
//import MySQL from '../../../assets/images/MySQL.png'
//import Postman from '../../../assets/images/Postman.png'

const Logo = () => {
  return (
    <div className="Logos-container">
      <FontAwesomeIcon icon={faHtml5} color="orange" size="5x" />
      <FontAwesomeIcon icon={faGithub} color="black" size="5x" />
      <FontAwesomeIcon icon={faReact} color="black" size="5x" />
      <FontAwesomeIcon icon={faNodeJs} color="black" size="5x" />
      <FontAwesomeIcon icon={faJs} color="black" size="5x" />
      <FontAwesomeIcon icon={faCss3} color="blue" size="5x" />
    </div>
  )
}

export default Logo
