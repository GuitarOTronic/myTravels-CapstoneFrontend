import React from 'react'
import { Link } from 'react-router-dom'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import TripEntries from './tripentries.js'
import $ from 'jquery';
import '../css/tripview.css'

const Trip= ({trip, setTripDetails}) => {

  function goToTripEntries(e){
    console.log(trip.id);
    setTripDetails(trip.id, trip.title)
  }

  return(
      <div className='trip' id={ trip.id } onClick={ goToTripEntries } >
        {/* <h2 className='overlay'>{trip.title}</h2> */}
        <div className='imgDiv'>
          <Image cloudName="mytravels" publicId="owpsfonr0i72p26wnj5n.jpg" >
            <Transformation width="150" crop="scale" />
            <Transformation radius="20" border="2px_solid_black" />
          </Image>
        </div>
        <div className='tripTitleContainer'>
          <h2 className='tripTitle'>{ trip.title }</h2>
          <Link to='#'>See trip</Link>
            <input name="file" type="file" className="cloudinary-fileupload" data-cloudinary-field="wompwomp"
              data-form-data="{&quot;upload_preset&quot;: &quot;ncc1xgsl&quot;}"></input>

        </div>
      </div>

  )
}

export default Trip
