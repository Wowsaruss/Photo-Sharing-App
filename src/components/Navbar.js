import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import search from '../assets/search-icon.svg';
import upload from '../assets/cloud-upload-icon.png';

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
                <Link className='nav-logo' to='/'>
                    EMULSION
                </Link>
                <div className='navbar-links' >
                    <div className="navbar">
                        <div className="dropdown">
                            <Link className="dropbtn" to='/dashboard'>YOU</Link>
                            <div className="dropdown-content">
                                <Link to='/'>PROFILE</Link>
                                <Link to='/'>SETTINGS</Link>
                            </div>
                        </div> 
                    </div>
                    <Link to='/explore'>EXPLORE</Link>
                </div>
                <Link to='/upload'>
                    <img className='upload-icon' src={upload} alt=''/>
                </Link>
                <div className='nav-search' >
                    <a><img className='search-icon' src={search} alt='' /></a>
                    <input className='nav-search-input' placeholder='Search Photos' />
                </div>
            </div>
        )
    }
}
export default Navbar;