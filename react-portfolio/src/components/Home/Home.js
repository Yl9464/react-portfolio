import './Home.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['Y', 'i', 'n', 'g', ' ', 'C', '.', ' ', 'L', 'u']
    const jobArray= ['Junior Software Engineer']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        }, [])
    return (
      <div className="container home-page">
        <div className="text-zone">
  
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={9}
            />
          </h1>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={33}
            />
          </h2>
          <div className='Logos'>
            <Logo/>
        </div>
        </div>
      </div>
    )
}

export default Home  