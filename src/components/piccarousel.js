import React from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import Pic from './pic.js'
const PicCarousel = ({ public_ids, forFellowEntries, showAllTripPics }) => {

  console.log('dat pics >>>>>', public_ids);

    return (
      <div>
       { forFellowEntries ?
        <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={150}
        totalSlides={ public_ids.length || 0}
        >
        <Slider>
        { public_ids.map((id, i ) => {
          return (
            <Slide index={i}>
              <Image cloudName='mytravels' publicId={id}>
                <Transformation height='200' crop="limit" />
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
      :
        <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight= {showAllTripPics ? 200 : 150}
        totalSlides={ public_ids.length || 0}
        >
          <Slider>
          { public_ids.map((id, i ) => {
            return (
            <Slide index={i}>
              <Image cloudName='mytravels' publicId={id}>
                <Transformation height='400' crop="scale" />
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


    }
    </div>
  )
  }




export default PicCarousel
