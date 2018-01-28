import React from 'react'
import { withRouter } from 'react-router'
// import { Link } from 'react-router-dom'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import '../../css/mytrips.css'

class NewEntryForm extends React.Component{
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
    console.log('??????', this.props);
    const title = e.target.querySelectorAll('input')[0].value
    await this.props.createNewTrip(title, this.state.country, this.state.region, this.props.props)
    // this.props.history.push('/mytrips', this.state)
    this.props.getTrips()
  }
 selectCountry(val){
   console.log('heyo', this.props.props.name);
   this.setState({country:val})
  }
 selectRegion(val){
   console.log('region', val);
   this.setState({region:val})
  }
  render(){
    {console.log('render ',this.state.country);}
    return(
      <div className='tripFormContainer'>
        <div className='formContainer'>
          <h3>Create New Memory</h3>
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
           {/* {error ? <div className='error'>{ error.signin }</div>:''} */}
        </div>
      </div>
    )
  }

}

export default withRouter(NewEntryForm)
