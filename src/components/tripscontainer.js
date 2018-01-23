import React from 'react'
import Post from './post.js'
const TripsContainer = ({name}) => {
  return(
    <main>
      <div className='nameDiv'>
        <h2>{ name ? ('Hey, ' + name + '!' ): 'Hey buddy'}</h2>
      </div>
      <div>
        <h1>myTrips</h1>
      </div>
      <div className='postsContainer'>
          <Post />
      </div>

    </main>
  )

}

export default TripsContainer
