import React from 'react'
import { Link } from 'react-router-dom'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import $ from 'jquery';

const Trip= ({trip}) => {
  // window.$.cloudinary.config({ cloud_name: 'mytravels', secure: true})
  console.log(trip);

  return(
    <div className='trip' >
      <h2 className='overlay'>{trip.title}</h2>
      <div className='imgDiv'>
        <Image cloudName="mytravels" publicId="owpsfonr0i72p26wnj5n.jpg" >
          <Transformation width="150" crop="scale" />
          <Transformation radius="20" border="2px_solid_black" />
        </Image>
      </div>
      <div className='tripTitleContainer'>
        <h2 className='tripTitle'>{trip.title}</h2>
        <Link to='#'>See trip</Link>
          <input name="file" type="file" className="cloudinary-fileupload" data-cloudinary-field="wompwomp"
            data-form-data="{&quot;upload_preset&quot;: &quot;ncc1xgsl&quot;}"></input>

      </div>
    </div>
  )
}

export default Trip
