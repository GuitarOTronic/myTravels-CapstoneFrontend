import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
  return(
    <div className='post'>
      <div className='imgDiv'>
        <img alt='Sexy JPG'></img>
      </div>
      <div className='postTitle'>
        <h2>Some sexy header</h2>
        <Link to='#'>See trip</Link>
      </div>
    </div>
  )
}

export default Post
