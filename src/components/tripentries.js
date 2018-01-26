import React from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import '../css/tripentries.css'

const TripEntries = ({ memory, public_id }) => {
return(
  <div className='memoryContainer'>
    <div>
      {memory}
    </div>
    <div>
      <Image cloudName="mytravels" publicId={public_id +".jpg" }>
        <Transformation width="150" crop="scale" />
        <Transformation radius="20" border="2px_solid_black" />
      </Image>
    </div>
  </div>

)
}

export default TripEntries
