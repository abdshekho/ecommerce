import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import  "./Slideshow.css"
import slid1 from "../../images/slider1.png"
import slid2 from "../../images/slider4.png"
import prod4 from "../../images/prod4.png"

const fadeImages = [
    {
        url: slid1,
        caption: 'First Slide',
        captionP:"One Two Three",
        backgroundG: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,109,121,1) 35%, rgba(0,212,255,1) 100%)"
    },
    {
        url: slid2,
        caption: 'Second Slide',
        captionP:"Four Five Six",
        backgroundG:"linear-gradient(90deg, rgba(231,211,199,1) 0%, rgba(108,9,121,1) 100%, rgba(51,0,255,1) 100%)"

    },
    {
        url: prod4,
        caption: 'Third Slide',
        captionP:"seven eight nine",
        backgroundG:"linear-gradient(90deg, rgba(231,211,199,1) 0%, rgba(76,204,245,1) 75%, rgba(0,189,255,1) 100%)"

    },
];
const props = {
    autoplay: true,
    duration: 2500,
    indicators:true,
    canSwipe:false,
    transitionDuration:600,
    easing:"ease-in"
    
}
const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide { ...props }>
                { fadeImages.map( ( fadeImage, index ) => (
                    <div key={ index } style={{"position":"relative","background": fadeImage.backgroundG.toString()}}>
                        <img style={ { height:'300px'} } src={ fadeImage.url } alt=''/>
                        <h2 >{ fadeImage.caption }</h2>
                        <h4 >{ fadeImage.captionP }</h4>
                    </div>
                ) ) }
            </Slide>
        </div>
    )
}
export default Slideshow