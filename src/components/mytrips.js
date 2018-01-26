import React from 'react'
import { Redirect } from 'react-router-dom'
import '../css/mytrips.css'
import axios from 'axios'
import Sidebar from './sidebar.js'
import NewTripForm from './forms/newtripform.js'
import TripsContainer from './tripscontainer.js'
const localhost ='http://localhost:2999'

class MyTrips extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showNewTripForm:false,
      trips:[],
      tripId:'',
      tripName:'',
      tripEntries:[],
      photoId:[]
    }
    this.toggleTripForm=this.toggleTripForm.bind()
  }

  async componentDidMount(){
    this.getTrips()
  }


  addPhoto = async ( public_id, url )=>{
    let body = {
      public_id: public_id,
      trip_id:this.state.tripId,
      user_id:this.props.state.id,
      url:url
    }

    await axios.post(`${localhost}/pics`, body).then(response => {
      console.log(response);

    }).catch((err) => {
      console.error();
    })
    this.setState({ photoId: [...this.state.photoId, public_id] })
  }

  //get trips then store them in state
  getTrips = async () => {
    console.log('getTripsy ', this.props.state.id);
    await axios.get(`${localhost}/trips/${this.props.state.id}`).then(response => {
      this.setState({
          showNewTripForm:false,
          trips:response.data.response,
        })
        console.log(this.state);
    }).catch((err)=> {
      console.log(err);
    })
  }

  setTripDetails = async ( id, name ) => {
    await axios.get(`${localhost}/tripEntries/${id}`).then(response => {
      let tripEntries = response.data.response
      console.log('seeTripDeets baby: ', response.data.response);
      this.setState({
        tripId:id,
        tripName:name,
        tripEntries: tripEntries,
        // memory:memory,
        // public_id:public_id
      })
    }).catch((err)=> {
      console.error()
    })
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
    console.log('MyTrips\' state: ', this.state.trips);
    return(
      <div className='myTripsContainer'>
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
            id ={ this.props.state.id }
            memory= { this.state.memory }
            name ={ this.props.name }
            public_id={ this.state.public_id }
            setTripDetails={ this.setTripDetails }
            tripId={ this.state.tripId }
            tripName={ this.state.tripName }
            trips={ this.state.trips}
            tripEntries={ this.state.tripEntries }
          />
        }
        <Sidebar showTripForm={ this.toggleTripForm }/>
      </div>
    )
  }
  // this.state.trips.map((trip, i) =>
  // {this.state.steps.map((step, i) => <HistoryItem key={i} step={step}/>)}
}
export default MyTrips
