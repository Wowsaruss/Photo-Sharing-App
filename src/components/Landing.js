import React from 'react';


class Landing extends React.Component {
    render() {
        return (
            <div className='landing-main'>
                <div className='hero-image-landing' alt=''>
                    <div className='filmshare-text-hero' >FILMSHARE</div>
                    <div className='buttons-landing-main' >
                        <button to='/dashboard' className='login-button-landing' >LOGIN</button>
                        <button to='/dashboard' className='create-account-landing' >CREATE ACCOUNT</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;