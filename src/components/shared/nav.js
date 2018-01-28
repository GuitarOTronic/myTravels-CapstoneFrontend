import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../../css/nav.css'

const Navigation = ({name, logout}) => {
  return (
    <div className='banner'>
       <div className='loginContainerLink'>{name ? <Link to='/login' id='signupLogin' onClick={logout}>logout</Link> :  <Link to='/login' id='signupLogin'>signup/login</Link>}</div>
      <nav>
        <div className='navContainer'>
          <div>
              <h1>myTravels</h1>
          </div>
          <div className='navLinks'>
            <Link to ='/' >Home</Link>
            <Link to ='/mytrips' >myTrips</Link>
            <Link to ='/#' >Current Travelers</Link>
          </div>
      </div>
      </nav>
    </div>
  )
}

export default withRouter(Navigation)
