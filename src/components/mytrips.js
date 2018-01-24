import React from 'react'
import '../css/mytrips.css'

import Sidebar from './sidebar.js'
import NewTripForm from './forms/newtripform.js'
import TripsContainer from './tripscontainer.js'

class MyTrips extends React.Component{
  constructor(props){
    super(props)
    this.props.state.showNewTripForm=false

  }

  static toggleTripForm() {
    console.log('in toggley ');
    if (this.props.state.showNewTripForm) this.props.state.showNewTripForm=false
  }



  render(){
    console.log('MyTrips\' state: ', this.props.state.showNewTripForm);
    return(
      <div className='myTripsContainer'>
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
