import React from 'react'
import image1 from './imageOne.jpg'
import image2 from './imageTwo.jpg'
import image3 from './imageThree.jpg'
import { Carousel } from 'react-responsive-carousel'
import Search from '../search/Search'

const SliderMobile = () => {
  const sliderPropmobile = {
    autoPlay: true,
    infiniteLoop: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    showIndicators: false,
    stopOnHover: false,
    dynamicHeight: true,
    width: '100%',
  }
  return (
    <>
      <div className="Slider-Mobile-Container">
        <Carousel {...sliderPropmobile}>
          <img className="image-slider" src={image1} alt="image01" />

          <img className="image-slider" src={image2} alt="image02" />

          <img className="image-slider" src={image3} alt="image03" />
        </Carousel>
        <Search/>
      </div>
    </>
  )
}

export default SliderMobile
