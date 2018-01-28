import React from 'react'
import Trip from './trip.js'
import TripEntries from './tripentries.js'
import Modal from 'react-modal';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
class TripsContainer extends React.Component {
  constructor (props){
    super (props)
  }

// = ({trips, memory, name, setTripDetails, tripId, tripName, addPhoto, tripEntries, photoId}) => {

  // cloudinary config for uploads
  componentDidMount(){
    console.log('bitchin props ', this.props);
    // console.log('mounted betch');
    // window.$.cloudinary.config({ cloud_name: 'mytravels', secure: true });
    // if(window.$.fn.cloudinary_fileupload !== undefined) {
    //   window.$("input.cloudinary-fileupload[type=file]").cloudinary_fileupload().bind('cloudinarydone', function(e, data) {
    //       console.log('data ', data);
    //       this.props.addPhoto(data.result.public_id, data.result.url)
    //     })
    //   }
  }

//     $('.thumbnails').append($.cloudinary.image(data.result.public_id,
//       { format: 'jpg', width: 150, height: 100,
//         crop: 'thumb', gravity: 'face', effect: 'saturation:50' } ))
//       })
//       .bind('cloudinaryprogress', function(e, data) {
//   $('.progress_bar').css('width',
//     Math.round((data.loaded * 100.0) / data.total) + '%');
// });
  render(){
    return(
      <main>
        {/* <input name="file" multiple='true' type="file" className="cloudinary-fileupload" data-cloudinary-field="wompwomp"
          data-form-data="{&quot;upload_preset&quot;: &quot;ncc1xgsl&quot;}"></input> */}

        <div className='nameDiv'>
          <h2>{ this.props.name ? ('Hey, ' + this.props.name + '!' ): ''}</h2>
        </div>
        <div>
          <h1>{this.props.tripName ? this.props.tripName : 'myTrips' }</h1>
        </div>
        <div className='allTripsContainer'>
          {this.props.tripId  ?
            this.props.tripEntries.map((tripEntry, i) => <TripEntries  id={ tripEntry.id } date={tripEntry.created_at} memory={ tripEntry.memory } photoId={this.props.photoId} title= { tripEntry.title } key={ i }/>) :
            this.props.trips.map((trip, i) => <Trip  setTripDetails={ this.props.setTripDetails } trip={ trip } key={ i }/>)
          }
        </div>

      </main>
    )
  }
}
export default TripsContainer
