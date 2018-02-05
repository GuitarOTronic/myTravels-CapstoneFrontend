import React from 'react'
import { withRouter } from 'react-router'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import '../../css/mytrips.css'

class NewTripForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      country:'',
      region:''
    }
    this.createNewTrip = this.createNewTrip.bind(this)
  }

   createNewTrip = async (e) => {
    e.preventDefault()
    const title = e.target.querySelectorAll('input')[0].value
    await this.props.createNewTrip(title, this.state.country, this.state.region, this.props.props)
    this.props.getTrips()
  }
 selectCountry(val){
   this.setState({country:val})
  }
 selectRegion(val){
   this.setState({region:val})
  }
  render(){
    return(
      <div className='tripFormContainer'>
        <button className='modalX' onClick={this.props.toggleTripForm}>X</button>
        <div className='formContainer'>
          <h3>Create New Trip</h3>
          <form onSubmit={ this.createNewTrip }>
            title:
            <input className='inputField' type='text' ></input>
            country:
            <br/>
            <CountryDropdown value={this.state.country} onChange={(val) => this.selectCountry(val)}> </CountryDropdown>
            <br/>
            <br/>
            region:
            <br/>
            <br/>
            <RegionDropdown value={this.state.region} country={this.state.country} onChange={(val) => this.selectRegion(val)}></RegionDropdown>
            <br/>
            <br/>

            traveling: <input className='inputField' type='checkbox' ></input>
            <input type="submit" value="Create Trip"/>
           </form>
        </div>
      </div>
    )
  }

}

export default withRouter(NewTripForm)
