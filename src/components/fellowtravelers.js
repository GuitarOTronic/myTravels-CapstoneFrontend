import React from 'react'
import '../css/fellowtravelers.css'
import FellowEntries from './fellowentries'
import axios from 'axios'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {Collapse} from 'react-collapse';
const localhost = process.env.REACT_APP_LOCAL_HOST
class FellowTravelers extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tripEntries:[],
      isOpened:false
    }
    this.selectCountry=this.selectCountry.bind(this)
    this.showFilter=this.showFilter.bind(this)
  }

   componentDidMount = async () => {
    this.getTripEntries()
  }

  filter = async () => {
    let tripEntries = this.state.tripEntries
    let country = this.state.country
    let toggleShow = tripEntries.map((entry)=> {
      if(entry.country !== country){
        entry.show = false
      }else{
        entry.show = true
      }
      return entry
    })
    this.setState({tripEntries:toggleShow})
  }

  async getTripEntries(){
    await axios.get(`${localhost}/tripEntries`).then(response => {
      let tripEntries=response.data.tripEntries
      let entriesArr=[]
      for (let i in tripEntries){
        tripEntries[i].show=true
        entriesArr.push(tripEntries[i])
      }
      this.setState({tripEntries:entriesArr})
    })
  }

  selectCountry(val){
    this.setState({country:val})
   }

  showFilter(){
    this.setState({isOpened:!this.state.isOpened})
  }

  render(){
    return (
      // <Collapse isOpened={this.state.isOpened}>
      //   <div className='fellowMemories'>
      //     {this.props.entry.memory}
      //   </div>
      // </Collapse>
      <div>
        <div className='fellowTravelersContainer'>
          <div className='filterBtnsContainer'>
            <button className='showFilterBtn' onClick={this.showFilter} style={!this.state.isOpened ? {display:'block'}:{display:'none'}}>Filter by country</button>
            <Collapse isOpened={this.state.isOpened}>
              <div className='searchBar'>
                <div>
                  Filter by Country:{'   '}
                  <CountryDropdown  value={this.state.country} onChange={(val) => this.selectCountry(val)}> </CountryDropdown>
                  <button className='filterBtn' onClick={this.filter}>filter</button>
                </div>
                <div>
                  <i onClick={this.showFilter} className='closeFilter material-icons'>close</i>
                </div>
              </div>
            </Collapse>
          </div>
          <div className='entriesContainer'>
            {this.state.tripEntries.map((entry, i ) => <FellowEntries entry={ entry } key={ i }/>)}
          </div>
        </div>

      </div>
    )
  }


}

export default FellowTravelers
