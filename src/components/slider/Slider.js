import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import './Slider.css'
import image1 from './imageOne.jpg'
import image2 from './imageTwo.jpg'
import image3 from './imageThree.jpg'
import Search from '../search/Search'

const Slider = () => {
  const sliderProp = {
    autoPlay: true,
    infiniteLoop: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    stopOnHover: false,
    width: '100%',
  }
  
  return (
    <>
      <div className="Slider-Container">
        <Carousel {...sliderProp}>
          <img src={image1} alt="image01" />

          <img src={image2} alt="image02" />

          <img src={image3} alt="image03" />
        </Carousel>
        <Search/>
        <div className='image-opacity'>

        </div>
        <div className='slider-text'>
            <div className='title-slider'>
                <span>
                The Best Way To Find Your<br></br> Perfect Home
                </span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Slider
