import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/Octicons-device-camera.svg';

class Navbar extends React.Component {
    render() {
        return(
            <div>
                <div className='navbar-main' >
                    <Link to='/'>
                    <img className='nav-logo' src={logo} />
                    </Link>
                    <Link to='/dashboard'>Home</Link>
                    <Link to='/'>Search</Link>
                    <Link to='/'>Profile</Link>
                    <Link to='/'>Settings</Link>
                </div>
            </div>
        )
    }
}
export default Navbar;