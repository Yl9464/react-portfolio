import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div className="container home-page"> 
        <div className='text-zone'>
            <h1> <u>Ying</u> <u>C.</u> <u>Lu</u> </h1>
             <h2> Junior Software Engineer </h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
               
        </div>
            
    </div>
    )
}

export default Home  