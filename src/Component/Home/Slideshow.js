import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Slideshow.css"
import slid1 from "../../images/14pngwing.com.png"
import slid3 from "../../images/10pngwing.com - Copy.png"
import slid2 from "../../images/2pngwing.com.png"
import prod4 from "../../images/5pngwing.com.png"

const fadeImages = [
    {
        url: prod4,
        // caption: 'Third Slide',
        captionC: "welcome to syrian e-commerce",
        backgroundG: "linear-gradient(90deg, rgba(231,211,199,1) 0%, rgba(76,204,245,1) 75%, rgba(0,189,255,1) 100%)"

    },
    {
        url: slid2,
        caption: 'We strive to continuously improve customer service',
        captionB: "We have a professional team to improve customer service",
        backgroundG: "linear-gradient(86deg, rgba(234,239,244,1) 0%, rgba(102,142,202,1) 31%, rgba(34,111,180,1) 59%, rgba(13,55,115,1) 90%)"

    },
    {
        url: slid1,
        caption: 'Many simple payment options to facilitate the purchase',
        captionB: " Secure payment platforms and simple ways to pay",
        backgroundG: "linear-gradient(90deg, rgba(231,211,199,1) 0%, rgba(76,204,245,1) 75%, rgba(0,189,255,1) 100%)"
    },
    {
        url: slid3,
        captionC: 'Following-up and monitoring the purchase processes to improve customer service experience',
        backgroundG: "linear-gradient(86deg, rgba(234,239,244,1) 0%, rgba(157,186,212,1) 28%, rgba(93,166,232,1) 66%, rgba(8,86,157,1) 97%)"


    },
];
const props = {
    autoplay: true,
    duration: 3500,
    indicators: true,
    canSwipe: false,
    transitionDuration: 400,
    easing: "linear"

}
const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide { ...props }>
                { fadeImages.map( ( fadeImage, index ) => (
                    <div key={ index } style={ { "position": "relative", "background": fadeImage.backgroundG.toString() } }>
                        <img style={ { height: '300px' } } src={ fadeImage.url } alt='' />
                        { fadeImage.caption ? <h2 >{ fadeImage.caption }</h2> : <div></div> }
                        { fadeImage.captionC ? <h3 >{ fadeImage.captionC }</h3> : <div></div> }
                        { fadeImage.captionB ? <h4 >{ fadeImage.captionB }</h4> : <div></div> }

                    </div>
                ) ) }
            </Slide>
        </div>
    )
}
export default Slideshow