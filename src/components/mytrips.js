import React from 'react'
import { Redirect } from 'react-router-dom'
import '../css/mytrips.css'
import axios from 'axios'
import Sidebar from './sidebar.js'
import TripEntrySidebar from './tripentrysidebar.js'
import NewTripForm from './forms/newtripform.js'
import NewEntryForm from './forms/newentryform.js'
import TripsContainer from './tripscontainer.js'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import moment from 'moment'
import DatePicker from 'react-datepicker';
import ReactModal from 'react-modal';
import EntryReactModal from './entryreactmodal.js'
import 'react-datepicker/dist/react-datepicker.css';
const localhost =process.env.REACT_APP_LOCAL_HOST

window.$.cloudinary.config({ cloud_name: 'mytravels', secure: true });

class MyTrips extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showNewTripForm:false,
      modalIsOpen:false,
      trips:[],
      tripId:this.props.tripId,
      tripName:'',
      tripEntries:[],
      photoId:[],
      startDate: moment()
    }
    this.toggleTripForm=this.toggleTripForm.bind()
    this.toggleModal =this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.addPhoto = this.addPhoto.bind(this)

  }

  async componentDidMount(){
    this.getTrips()
  }

  addPhoto = async ( public_id, url ) => {
    let body = {
      public_id: public_id,
      trip_id:this.state.tripId,
      user_id:this.props.state.id,
      trip_entry_id:this.state.tripEntryId,
      url:url
    }
    this.setState({ photoId: [...this.state.photoId, public_id] })
  }

  closeModal = () => {
    this.setState({modalIsOpen:false})
  }

  createMemory = async (e) =>{
    e.preventDefault()
    let title = e.target.querySelectorAll('input')[0].value
    let date = e.target.querySelectorAll('input')[1].value
    let publicMem = e.target.querySelectorAll('input')[3].value
    let memory = e.target.querySelectorAll('textarea')[0].value
    let trip_entry_id = window.tripEntryId
    const body ={ title, date, memory, trip_entry_id}
    axios.patch(`${localhost}/tripEntries`, body).then(response => {
      this.closeModal()
      this.setTripDetails(this.state.tripId, this.props.tripName)
    })

  }
  //get trips then store them in state
  getTrips = async () => {
    await axios.get(`${localhost}/trips/${this.props.state.id}`).then(response => {
      let trips=[]
      response.data.trips.map((trip) => {
        if (trip !== null){
            trips.push(trip)
        }
      })
      // adding be routes to include public_id for trip pics
      this.setState({
          showNewTripForm:false,
          trips:trips,
        })
    }).catch((err)=> {
      console.log(err);
    })
  }

  handleChange= (date) =>{
      this.setState({
        startDate: date
      });
    }

  setTripDetails = async ( id, name ) => {
    await axios.get(`${localhost}/tripEntries/${id||this.props.tripId}`).then(response => {
      let memory = response.data.tripEntries[0].memory
      let picIds = response.data.ids
      let tripEntries = response.data.tripEntries


     this.setState({
        photoId:picIds,
        memory:memory,
        tripEntries:tripEntries
      })
      this.props.setTripId(id||this.props.tripId, name)

    }).catch((err)=> {
      console.log(err)
    })
  }

  toggleModal = async ()=> {
    if(this.state.modalIsOpen) {
      this.setState({modalIsOpen:false})
    }else{
      this.setState({modalIsOpen:true})
      let user_id = this.props.state.id
      let trip_id = this.props.tripId
      let body = {user_id, trip_id, title:'Your Title', memory:'Your Memories'}
      await axios.post(`${localhost}/tripEntries/getNewTripEntryId/${trip_id}`, body).then(response => {
        window.tripEntryId=response.data.tripEntryId
      })

    }
  }
  //toggle showNewTripForm
  toggleTripForm = () => {
    if(this.state.showNewTripForm){
      this.setState({showNewTripForm: false})
    }else{
      this.setState({showNewTripForm: true})
    }
  }

  render(){

    return(
      <div className='myTripsContainer' >

        {!this.props.state.id ? <Redirect to={'/login'}/> :''}
        { this.state.showNewTripForm ?
            <NewTripForm
            createNewTrip={ this.props.createNewTrip }
            getTrips={ this.getTrips }
            props={ this.props }
            toggleTripForm={ this.toggleTripForm }
          /> :

            <TripsContainer
              addPhoto={ this.addPhoto }
              createMemory={ this.createMemory }
              handleChange={ this.handleChange}
              id ={ this.props.state.id }
              isOpen={ this.state.isOpen }
              memory= { this.state.memory }
              name ={ this.props.name }
              onRequestClose={this.closeModal}
              public_id={ this.state.public_id }
              photoId={ this.state.photoId }
              refreshTripEntries={this.refreshTripEntries}
              setTripDetails={ this.setTripDetails }
              showAllTripPics={  this.props.showAllTripPics}
              showCarousel={this.props.showCarousel}
              startDate={this.state.startDate}
              toggleCarousel={this.props.toggleCarousel}
              toggleModal={ this.state.toggleModal }
              toggleShowAllTripPics={ this.props.toggleShowAllTripPics}
              tripId={ this.props.tripId }
              tripName={ this.props.tripName }
              trips={ this.state.trips}
              tripEntries={ this.state.tripEntries }
              tripEntryId={ this.state.tripEntryId }
              tripPicIds={ this.props.tripPicIds}
              userId={this.props.state.id}
            />

        }
        { this.props.tripId ?
          <TripEntrySidebar toggleShowAllTripPics={ this.props.toggleShowAllTripPics} showEntryForm={this.toggleModal}/> :
          <Sidebar showTripForm={ this.toggleTripForm }/>
        }
        <EntryReactModal
            refreshTripEntries={this.refreshTripEntries}
            tripEntryId={ this.state.tripEntryId }
            tripId={ this.props.tripId}
            userId={this.props.state.id}
            createMemory={ this.createMemory }
            handleChange={ this.handleChange}
            startDate={this.state.startDate}
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            addPhoto={ this.addPhoto }/>



      </div>
    )
  }
}
export default MyTrips
