import React from 'react'
import { Link } from 'react-router-dom'
import '../css/sidebar.css'

const Sidebar =() => {
  return (
    <div className='sidebarContainer'>
      <div className='sidebarLinkContainer'>
        <li><Link to='#'>Create New Trip</Link></li>
        <hr></hr>
        <li><Link to='#'>Past Trips</Link></li>
        <hr></hr>
        <li><Link to='#'>Current Location</Link></li>
        <hr></hr>
      </div>
    </div>

  )

}

export default Sidebar
