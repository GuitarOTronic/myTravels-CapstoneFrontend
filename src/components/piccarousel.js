import React from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import Pic from './pic.js'
const PicCarousel = ({ public_ids, forFellowEntries, toggleCarousel, showAllTripPics, toggleShowAllTripPics }) => {

  console.log('dat pics >>>>>', public_ids);

    return (
      <div style={{display:'block'}}>
        {/* <button className='carouselX' onClick={this.props.toggleTripForm}>X</button> */}

       { forFellowEntries ?
      <div className='carouselContainer'>
        <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={150}
        totalSlides={ public_ids.length || 0}
        >
        <Slider>
        { public_ids.map((id, i ) => {
          return (
            <Slide index={i}>
              <Image className='carouselImg' cloudName='mytravels' publicId={id}>
                <Transformation height='200' crop="limit" />
              </Image>
            </Slide>)
        })
        }
        </Slider>
        <div className='btnContainer'>
          <ButtonBack className='btnStyle'> Back </ButtonBack>
          <ButtonNext className='btnStyle'> Next </ButtonNext>
        </div>

        </CarouselProvider>
      </div>
      :
      <div className='carouselContainer'>
        <div className='carouselXContainer'>
          <button className='carouselX' onClick={showAllTripPics ?  toggleShowAllTripPics : toggleCarousel}><i class="material-icons">close</i></button>
        </div>
        <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight= {showAllTripPics ? 200 : 150}
        totalSlides={ public_ids.length || 0}
        >
          <Slider>
          { public_ids.map((id, i ) => {
            return (
            <Slide index={i}>
              <Image className='carouselImg' cloudName='mytravels' publicId={id}>
                <Transformation height='400' crop="scale" />
              </Image>
            </Slide>)
          })
          }
          </Slider>
          <div className='btnContainer'>
            <ButtonBack> Back </ButtonBack>
            <ButtonNext> Next </ButtonNext>
          </div>
        </CarouselProvider>
      </div>

    }
  </div>
  )
  }




export default PicCarousel
