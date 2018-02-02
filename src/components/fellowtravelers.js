import React from 'react'
import '../css/fellowtravelers.css'
import FellowEntries from './fellowentries'
import axios from 'axios'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
const localhost = process.env.REACT_APP_LOCAL_HOST
class FellowTravelers extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tripEntries:[]
    }
    this.selectCountry=this.selectCountry.bind(this)
  }

   componentDidMount = async () => {
    this.getTripEntries()
  }

  filter = async () => {
    console.log('heyo');
    await axios.get(`${localhost}/tripEntries/filter/${this.state.country}`).then(response => {
      console.log('filtered res', response );
    })
  }

  async getTripEntries(){
    await axios.get(`${localhost}/tripEntries`).then(response => {
      let tripEntries=response.data.tripEntries
      let entriesArr=[]
      for (let i in tripEntries){
        entriesArr.push(tripEntries[i])
      }
      this.setState({tripEntries:entriesArr})
    })
  }

  selectCountry(val){
    this.setState({country:val})
   }

  render(){
    return (
      <div className='fellowTravelersContainer'>
        <div className='searchBar'>
          Filter by Country:
          <CountryDropdown value={this.state.country} onChange={(val) => this.selectCountry(val)}> </CountryDropdown>
          <button onClick={this.filter}>filter</button>
        </div>
        <div className='entriesContainer'>
            {this.state.tripEntries.map((entry, i ) => <FellowEntries entry={ entry } key={ i }/>)}
        </div>


      </div>
    )
  }


}

export default FellowTravelers
