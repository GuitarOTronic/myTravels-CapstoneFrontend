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
      trips:[]
    }
    this.toggleTripForm=this.toggleTripForm.bind()
  }

  async componentDidMount(){
    this.getTrips()
  }
  //get trips then store them in state
  getTrips = async () => {
    console.log('getTripsy ', this.props.state.id);
    await axios.get(`${localhost}/trips/${this.props.state.id}`).then(response => {
      this.setState({trips:response.data.response})
    }).catch((err)=> {
      console.log(err);
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
            toggleTripForm={ this.toggleTripForm }
            getTrips={ this.getTrips }
            props={ this.props }
          /> :
          <TripsContainer trips={ this.state.trips} name ={ this.props.name } id ={ this.props.state.id }  />
        }
        <Sidebar showTripForm={ this.toggleTripForm }/>
      </div>
    )
  }
  // this.state.trips.map((trip, i) =>
  // {this.state.steps.map((step, i) => <HistoryItem key={i} step={step}/>)}
}
export default MyTrips
