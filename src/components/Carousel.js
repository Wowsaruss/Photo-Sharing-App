import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg" alt='' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://www.telegraph.co.uk/content/dam/Travel/galleries/travel/activityandadventure/The-worlds-most-beautiful-mountains/mountains-Kirkjufe_3374110a.jpg" alt='' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://www.telegraph.co.uk/content/dam/Travel/galleries/travel/activityandadventure/The-worlds-most-beautiful-mountains/mountains-stetind_3374095a.jpg" alt='' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel;