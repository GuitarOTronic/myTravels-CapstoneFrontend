import React from 'react'
import Trip from './trip.js'

const TripsContainer = ({name}) => {
  return(
    <main>
      <div className='nameDiv'>
        <h2>{ name ? ('Hey, ' + name + '!' ): ''}</h2>
      </div>
      <div>
        <h1>myTrips</h1>
      </div>
      <div className='tripsContainer'>
          <Trip/>
      </div>

    </main>
  )

}

export default TripsContainer
