import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from "../../images/mobile1.png"
import two from "../../images/mobile.png"
import three from "../../images/mobile2.png"

function SlideShowProduct() {

    return (
        <div className=''>

            <Carousel showIndicators={ false } thumbWidth={ 40 } verticalSwipe='natural' selectedItem={ 0 } autoFocus={ true } >
                <div>
                    <img src={ one } alt='' />
                </div>
                <div>
                    <img src={ two } alt='' />
                </div>
                <div>
                    <img src={ three } alt='' />
                </div>
                <div>
                    <img src={ one } alt='' />
                </div>
                <div>
                    <img src={ two } alt='' />
                </div>

            </Carousel>
        </div>
    );

}

export default SlideShowProduct;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>