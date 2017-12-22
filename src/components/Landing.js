import React from 'react';


class Landing extends React.Component {
    render() {
        return (
            <div className='landing-main'>
                <div className='hero-image-landing' alt=''>
                    <div className='filmshare-text-hero' >EMULSION</div>
                    <div className='landing-catch-phrase'>SHOOT MORE FILM</div>
                    <div className='buttons-landing-main' >
                        <button className='create-account-landing' >Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;