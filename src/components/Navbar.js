import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/Octicons-device-camera.svg';
import search from '../assets/search-icon.svg';

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('/api/get_users').then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    render() {
        
        return(
            <div className='navbar-main' >
                <Link className='nav-logo-2' to='/'>
                    {/* <img className='nav-logo' src={logo} alt='' /> */}
                    EMULSION
                </Link>
                <div className='navbar-links' >
                    <Link to='/dashboard'>HOME</Link>
                    <Link to='/explore'>EXPLORE</Link>
                    <Link to='/'>PROFILE</Link>
                    <Link to='/'>SETTINGS</Link>
                </div>
                <div className='nav-search' >
                    <img className='search-icon' src={search} alt='' />
                    <input className='nav-search-input' placeholder='Search Photos' />
                </div>
            </div>
        )
    }
}
export default Navbar;