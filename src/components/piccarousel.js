import React from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import Pic from './pic.js'
const PicCarousel = ({ picURLs, public_ids }) => {

  console.log('dat pics >>>>>', public_ids);

    return (
      <div >
        <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={150}
        totalSlides={public_ids.length}
      >
        <Slider>
        { public_ids.map((id, i ) => {
          return (<Slide index={i}>
            <Image cloudName='mytravels' publicId={id}>
            <Transformation height='400' crop="limit" />
          </Image>
        </Slide>)
        })
        }
        </Slider>
        <div className='btnContainer'>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </div>


      </CarouselProvider>
        {/* <Slider {...settings} >
          {public_ids.map((id, i )=> <Pic id={ id } key ={ i }/> )} */}
            {/* <div><img src={picURLs} /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div> */}
        {/* </Slider> */}
      </div>

    );

}

export default PicCarousel
