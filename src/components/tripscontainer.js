import React from 'react'
import Trip from './trip.js'
import TripEntries from './tripentries.js'
import Modal from 'react-modal';
import EntryReactModal from './entryreactmodal.js'
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
class TripsContainer extends React.Component {
  constructor (props){
    super (props)
  }

// = ({trips, memory, name, setTripDetails, tripId, tripName, addPhoto, tripEntries, photoId}) => {

//     $('.thumbnails').append($.cloudinary.image(data.result.public_id,
//       { format: 'jpg', width: 150, height: 100,
//         crop: 'thumb', gravity: 'face', effect: 'saturation:50' } ))
//       })
//       .bind('cloudinaryprogress', function(e, data) {
//   $('.progress_bar').css('width',
//     Math.round((data.loaded * 100.0) / data.total) + '%');



  render(){
    console.log("TripsContainer state", this.props );
    return(
      <main>

        <div className='nameDiv'>
          {/* <input className='cloudinary-fileupload'  type="file"></input> */}
          <h2>{ this.props.name ? ('Hey, ' + this.props.name + '!' ): ''}</h2>
        </div>
        <div>
          <h1>{this.props.tripName ? this.props.tripName : 'myTrips' }</h1>
        </div>
        <div className='allTripsContainer'>
          {this.props.tripId  ?
            this.props.tripEntries.map((tripEntry, i) => <TripEntries  id={ tripEntry.id } date={tripEntry.date} memory={ tripEntry.memory } photoId={this.props.photoId} title= { tripEntry.title } key={ i }/>) :
            this.props.trips.map((trip, i) => <Trip  setTripDetails={ this.props.setTripDetails } trip={ trip } key={ i }/>)
          }
        </div>
        {/* <EntryReactModal refreshTripEntries={this.refreshTripEntries} tripEntryId={ this.props.tripEntryId } tripId={ this.state.tripId} userId={this.props.state.id} createMemory={ this.createMemory } handleChange={ this.handleChange} startDate={this.state.startDate} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} addPhoto={ this.addPhoto }/> */}

      </main>
    )
  }
}
export default TripsContainer
