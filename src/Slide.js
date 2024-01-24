import React from "react";
import { Slide } from 'react-slideshow-image';
import { slideImages } from './Dataimage';
import 'react-slideshow-image/dist/styles.css'

function Slides () {
 
    return (<div>
        <Slide>
           {slideImages.map((slideImage, index) => (
             <div key={index}>
                <div className="slide-container" style={{ 'backgroundImage': `url(${slideImage.library})` }}></div>
             </div>
           ))}
        </Slide>  
    </div>
)}

export default Slides;
