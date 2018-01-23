import React from 'react'
import '../css/mytrips.css'

import Sidebar from './sidebar.js'
import TripsContainer from './tripscontainer.js'

class MyTrips extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    console.log(this.props.state.id);
    return(
      <div className='myTripsContainer'>
        <TripsContainer name ={ this.props.name } id ={ this.props.state.id }/>
        <Sidebar />
      </div>
    )
  }

}
export default MyTrips
