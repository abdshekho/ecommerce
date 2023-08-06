import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Spinner from '../utility/Spinner';

function SlideShowProduct( { images } ) {


    return (
        <div className=''>
            <Carousel showIndicators={ false } thumbWidth={ 40 } verticalSwipe='natural' selectedItem={ 0 } autoFocus={ true } >
                { images ? images.map( ( item, index ) => {
                    return <div key={ index }> <img src={ item } alt='' /> </div>
                } ) : <Spinner /> }
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