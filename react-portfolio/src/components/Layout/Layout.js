import './Layout.scss'
import Home from '../Home/Home'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
    return (
    <div className="App">
            <Sidebar />
        <div className='page'>
            <Home />
        </div>
    </div>
    )
}

export default Layout