import React from 'react'
import '../css/fellowtravelers.css'
import FellowEntries from './fellowentries'
import axios from 'axios'
const localhost ='http://localhost:2999'
class FellowTravelers extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tripEntries:[]
    }
  }

   componentDidMount = async () => {
    this.getTripEntries()
  }

  async getTripEntries(){
    await axios.get(`${localhost}/tripEntries`).then(response => {
      console.log('get trip entries', response);
      this.setState({tripEntries:response.data.response})
    })
  }
  render(){
    return (
      <div className='fellowTravelersContainer'>
        {/* map over tripEntries componet  */}
        {this.state.tripEntries.map((entry, i ) => <FellowEntries entry={ entry } key={ i }/>)}
      </div>
    )
  }


}

export default FellowTravelers
