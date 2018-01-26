import React from 'react'
import Trip from './trip.js'
import TripEntries from './tripentries.js'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import $ from 'jquery'
const TripsContainer = ({trips, memory, name, setTripDetails, tripId, tripName, addPhoto, tripEntries, photoId}) => {
// for TripsContainer props   ->  public_id,
// photoId={ this.state.photoId }
  console.log('tripEntry>>>>>>>>>>>', tripEntries);
  console.log('photoId>>>>>>>>>>>', photoId);
  console.log('memory>>>>>>>>>>>', memory);
  //cloudinary config for uploads
  window.$.cloudinary.config({ cloud_name: 'mytravels', secure: true });
  if(window.$.fn.cloudinary_fileupload !== undefined) {
    window.$("input.cloudinary-fileupload[type=file]").cloudinary_fileupload().bind('cloudinarydone', function(e, data) {
        addPhoto(data.result.public_id, data.result.url)
      })
//     $('.thumbnails').append($.cloudinary.image(data.result.public_id,
//       { format: 'jpg', width: 150, height: 100,
//         crop: 'thumb', gravity: 'face', effect: 'saturation:50' } ))
//       })
//       .bind('cloudinaryprogress', function(e, data) {
//   $('.progress_bar').css('width',
//     Math.round((data.loaded * 100.0) / data.total) + '%');
// });
  }
  return(
    <main>
      <input name="file" multiple='true' type="file" className="cloudinary-fileupload" data-cloudinary-field="wompwomp"
        data-form-data="{&quot;upload_preset&quot;: &quot;ncc1xgsl&quot;}"></input>

      <div className='nameDiv'>
        <h2>{ name ? ('Hey, ' + name + '!' ): ''}</h2>
      </div>
      <div>
        <h1>{tripName ? tripName : 'myTrips' }</h1>
      </div>
      <div className='allTripsContainer'>
        {tripId  ?
          tripEntries.map((tripEntry, i) => <TripEntries  id={ tripEntry.id } date={tripEntry.created_at} memory={ tripEntry.memory } photoId={photoId} title= { tripEntry.title } key={ i }/>) :
          trips.map((trip, i) => <Trip  setTripDetails={ setTripDetails } trip={ trip } key={ i }/>)
        }
      </div>

    </main>
  )

}
// TripEntries >>>>>>>>>>  public_id={ public_id }
export default TripsContainer
