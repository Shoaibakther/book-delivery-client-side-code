import React from 'react';

import { Carousel } from 'react-bootstrap';
import photo1 from '../../Image/Slider/slider-1.jpg'
import photo2 from '../../Image/Slider/slider-2.jpg'
import photo3 from '../../Image/Slider/slider-3.jpg'

const Banner = () => {
    return (
         <>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Bangladesh Cancer Institute</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Bangladesh Cancer Institute</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Bangladesh Cancer Institute</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Banner;