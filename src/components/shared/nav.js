import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/nav.css'

const Navigation = () => {
  return (
    <div className='banner'>
      <div className='loginContainer'><Link to='/login' id='signupLogin'>signup/login</Link></div>
      <nav>
        <div className='navContainer'>
          <div>
              <h1>myTravels</h1>
          </div>
          <div className='navLinks'>
            <Link to ='/' >Home</Link>
            <Link to ='/#' >myTrips</Link>
            <Link to ='/#' >Current Travelers</Link>
          </div>
      </div>
      </nav>
    </div>
  )
}

export default Navigation
