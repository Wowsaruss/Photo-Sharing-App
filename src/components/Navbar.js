import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/Octicons-device-camera.svg';

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
                <Link to='/'>
                    <img className='nav-logo' src={logo} alt='' />
                </Link>
                <div className='navbar-links' >
                    <Link to='/dashboard'>Home</Link>
                    <Link to='/explore'>Explore</Link>
                    <Link to='/'>Profile</Link>
                    <Link to='/'>Settings</Link>
                </div>
            </div>
        )
    }
}
export default Navbar;