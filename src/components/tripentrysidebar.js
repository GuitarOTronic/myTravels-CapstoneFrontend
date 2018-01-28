import React from 'react'
import { Link } from 'react-router-dom'
import '../css/sidebar.css'

const TripEntrySidebar =({ showEntryForm }) => {

  return (
    <div className='sidebarContainer'>
      <div className='sidebarLinkContainer'>
        <li><Link to='#' onClick={ showEntryForm } >New Memory</Link></li>
        <hr></hr>
        <li><Link to='#'>Photos from this trip</Link></li>
        <hr></hr>
        <li><Link to='#'>Current Location</Link></li>
        <hr></hr>
      </div>
    </div>

  )

}

export default TripEntrySidebar
