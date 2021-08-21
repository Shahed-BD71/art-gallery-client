import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './SlideShow.css'
import image1 from './slideshow/Slideshow1.jpg'
import image2 from './slideshow/Slideshow2.jpg'

const slideImages = [
  {
    url: image1,
    caption: 'Art Gallery'
  },
  {
    url: image2,
    caption: 'A Place of Aesthetic Art'
  },
];

const SlideShow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{backgroundImage: `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default SlideShow;