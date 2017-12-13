import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <div>
                <div className='navbar-main' >
                    <Link to='/'>
                    <div className='nav-logo' ></div>
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