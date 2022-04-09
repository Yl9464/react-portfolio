import './Logo.scss'
import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faGithub,
  faReact,
  faNodeJs,
  faCss3,
  faJs
} from '@fortawesome/free-brands-svg-icons'


const Logo = () => {
  return (
    <div className="icon-container">
      <FontAwesomeIcon classname='html' icon={faHtml5} color="red" size="8x" />
      <FontAwesomeIcon className='github' icon={faGithub} color="white" size="8x" />
      <FontAwesomeIcon className='react' icon={faReact} color="teal" size="8x" />
      <FontAwesomeIcon className='node' icon={faNodeJs} color="green" size="8x" />
      <FontAwesomeIcon className='Js' icon={faJs} color="yellow" size="8x" />
      <FontAwesomeIcon className='Css3' icon={faCss3} color="blue" size="8x" />
    </div>
  )
}

export default Logo
