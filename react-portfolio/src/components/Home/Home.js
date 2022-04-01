import './Home.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['Y', 'i', 'n', 'g', ' ', 'C', '.', ' ', 'L', 'u']
    const jobArray= ['J','u','n','i','o','r',' ','S','o','f','t','w','a','r','e',' ', 'E','n','g','i','n','e','e','r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        }, [])
    return (
    <div className="container home-page"> 
        <div className='text-zone'>
                <h1>
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={0}
                    />
                </h1>
                <h2>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={33}
                    />
                </h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
               
        </div>
            
    </div>
    )
}

export default Home  