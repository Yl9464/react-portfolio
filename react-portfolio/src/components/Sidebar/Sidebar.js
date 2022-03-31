import './Sidebar.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
    
const Sidebar = () => {
return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <image src={LogoS} alt='logo' />
                <image className='sub-logo' src={LogoSubtitle} alt='slobodan' />
            </Link>
        </div>
    )
}

export default Sidebar