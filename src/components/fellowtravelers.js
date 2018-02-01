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
      let tripEntries=response.data.tripEntries
      let entriesArr=[]
      for (let i in tripEntries){
        entriesArr.push(tripEntries[i])
      }
      console.log('get trip entries', entriesArr);

      this.setState({tripEntries:entriesArr})
    })
  }
  render(){
    return (
      <div className='fellowTravelersContainer'>
        {/* map over tripEntries componet  */}
        <div className='entriesContainer'>
            {this.state.tripEntries.map((entry, i ) => <FellowEntries entry={ entry } key={ i }/>)}
        </div>


      </div>
    )
  }


}

export default FellowTravelers
