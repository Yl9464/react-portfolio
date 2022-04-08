import './Profile.scss'
import ProfilePic from '../../../assets/images/Profile-pic.png'

const Profile = () => {
    return (
        <div className='Profile-pic'>
        <img src={ProfilePic} alt='my-profile'/>
        </div>
    )
}
export default Profile