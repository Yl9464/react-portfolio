import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import API from '../../../assets/images/API.png'
import './Logo.scss'

const Logo = () => {
  return (
    <div className='Logos'>
      <img className='API' src={API} alt='API-logo' />
  </div>
)
}

export default Logo
