import React from 'react'
import Trip from './trip.js'
import TripEntries from './tripentries.js'
import Modal from 'react-modal';
import EntryReactModal from './entryreactmodal.js'
import PicCarousel from './piccarousel.js'
import axios from 'axios'
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const localhost ='http://localhost:2999'

class TripsContainer extends React.Component {
  constructor (props){
    super (props)
    this.state={
      showCarousel:this.props.showCarousel,
      picURLs:[],
      public_ids:[],
    }
    this.toggleCarousel=this.toggleCarousel.bind(this)
  }

  getTripEntryPics = async(id) => {
    await axios.get(`${localhost}/pics/${id}`).then(response => {
      console.log(response.data.response);
      let public_ids= response.data.response.map((pic)=> {
        let url = pic.url
        return pic.public_id
        // let body ={ url, publicId}
      })
      console.log('picsArr>>>>>>', public_ids);
      this.setState({
        public_ids: public_ids,
        // public_ids:picsIds
      })
    })
  }

  toggleCarousel = (id) => {
    console.log('toggle dat carousel');
    this.props.toggleCarousel()
    // this.setState( {showCarousel: !this.state.showCarousel})
    this.getTripEntryPics(id)
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
        {this.props.showCarousel ?
            <div >
              <PicCarousel picURLs={ this.state.picURLs } public_ids={ this.state.public_ids}/>
            </div>
           :
          <div className='allTripsContainer'>
            {this.props.tripId  ?
              this.props.tripEntries.map((tripEntry, i) => <TripEntries toggleCarousel={ this.toggleCarousel } id={ tripEntry.id } date={tripEntry.date} memory={ tripEntry.memory } photoId={this.props.photoId} title= { tripEntry.title } key={ i }/>) :
              this.props.trips.map((trip, i) => <Trip  setTripDetails={ this.props.setTripDetails } trip={ trip } key={ i }/>)
            }
          </div>
      }
        {/* <EntryReactModal refreshTripEntries={this.refreshTripEntries} tripEntryId={ this.props.tripEntryId } tripId={ this.state.tripId} userId={this.props.state.id} createMemory={ this.createMemory } handleChange={ this.handleChange} startDate={this.state.startDate} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} addPhoto={ this.addPhoto }/> */}

      </main>
    )
  }
}
export default TripsContainer
