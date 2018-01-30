import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import '../../css/nav.css'

const Navigation = ({name, logout, resetTripId}) => {
  return (
    <div className='banner'>
<div className='loginContainerLink'>{name ? <Link to='/login' id='signupLogin' onClick={logout}>logout</Link> :  <Link to='/login' id='signupLogin'>signup/login</Link>}</div>
      <nav>

        <div className='navContainer'>
          <div className='titleIcon'>

              {/* <img src="https://png.icons8.com/ios/50/ffffff/world-map-filled.png"/> */}
              {/* <img src="https://png.icons8.com/ios/50/ffffff/passport.png"/> */}
              {/* <img src="https://png.icons8.com/metro/50/ffffff/passport.png"/> */}
              <img src="https://png.icons8.com/android/50/ffffff/world-map.png"/>
              <h1>myTravels</h1>
          </div>
          <div className='navLinks'>
            <NavLink to="/" exact activeClassName='navLink'>Home</NavLink>
            <NavLink to ='/mytrips' exact onClick={ resetTripId } activeClassName='navLink'>myTrips</NavLink>
            <NavLink to ='/#' activeClassName='navLink'>fellowTravelers</NavLink>

            {/* <Link activeStyle={{color:'red'}} to ='/' >Home</Link> */}
            {/* <Link to ='/mytrips' onClick={ resetTripId }>myTrips</Link>
            <Link to ='/#' >Current Travelers</Link> */}
          </div>
      </div>

      </nav>

    </div>
  )
}

export default withRouter(Navigation)
