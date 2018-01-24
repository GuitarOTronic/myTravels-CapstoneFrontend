import React from 'react'
import { Redirect } from 'react-router-dom'
import '../css/mytrips.css'

import Sidebar from './sidebar.js'
import NewTripForm from './forms/newtripform.js'
import TripsContainer from './tripscontainer.js'

class MyTrips extends React.Component{
  constructor(props){
    super(props)
    this.props.state.showNewTripForm=false

  }

  toggleTripForm = () => {
    console.log(this.props.state);
    if (this.props.state.showNewTripForm) this.props.state.showNewTripForm=false
    else this.props.state.showNewTripForm=true
  }


  render(){
    console.log('MyTrips\' state: ', this.props.state.showNewTripForm);
    return(
      <div className='myTripsContainer'>
        {!this.props.state.id ? <Redirect to={'/login'}/> :''}
        { this.props.state.showNewTripForm ?
          <NewTripForm/> :
          <TripsContainer name ={ this.props.name } id ={ this.props.state.id }/>
        }
        <Sidebar showTripForm={ this.toggleTripForm }/>
      </div>
    )
  }

}
export default MyTrips
