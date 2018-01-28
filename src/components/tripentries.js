import React from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import '../css/tripentries.css'
import moment from 'moment'


const TripEntries = ({ memory, photoId, title, id, date }) => {
  moment().format("MMM Do YY");
  let createdAt = moment(date).format( "MMMM YYYY")
  console.log('trip Entry info =>>> ', photoId, id);
return(
  <div className='memoryContainer'>
    <div>
      <h3>{ title }</h3>
    </div>
    <div>
      <h4>{ createdAt }</h4>
    </div>
    <p>
      { memory }
    </p>
    <div className='photosContainer'>
      { Object.keys(photoId).length >= 1 ?
        photoId[id].map((photo, i) => <Image cloudName="mytravels" publicId={photo +".jpg" } key ={ i }>
          <Transformation width="150" crop="scale" />
          <Transformation radius="0" border="1px_solid_black" />
        </Image>)
        :
       <Image cloudName="mytravels" publicId={ photoId[id] +".jpg" } >
          <Transformation width="150" crop="scale" />
          <Transformation radius="0" border="1px_solid_black" />
        </Image>
      }
    </div>
  </div>

)
}

export default TripEntries
