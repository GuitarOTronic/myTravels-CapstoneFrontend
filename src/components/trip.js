import React from 'react'
import { Link } from 'react-router-dom'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import TripEntries from './tripentries.js'
import $ from 'jquery';
import '../css/tripview.css'

const Trip= ({trip, setTripDetails, public_id}) => {

  function goToTripEntries(e){
    setTripDetails(trip.id, trip.title)
  }
  return(

      <div className='trip ' id={ trip.id } onClick={ goToTripEntries } >
          <div className='imgDiv'>
            <Image cloudName="mytravels" publicId={ public_id } >
              <Transformation width="150" crop="scale" />
              <Transformation radius="20" border="2px_solid_black" />
            </Image>
          </div>
          <div className='tripTitleContainer'>
            <h2 className='tripTitle'>{ trip.title }</h2>
          </div>
      </div>

  )
}

export default Trip
