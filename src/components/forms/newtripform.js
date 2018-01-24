import React from 'react'
import { Link } from 'react-router-dom'
const NewTripForm = () => {
  return(
    <div className='tripFormContainer'>
      <div className='formContainer'>
        <h3>New Trip</h3>
        <form >
          title:
          <input className='inputField' type='text' ></input>
          where:
          <input className='inputField' type='text' ></input>
          currently traveling:
          <input className='checkbox' type='checkbox' ></input>
         <input type="submit" value="Login"/>

         </form>
         {/* {error ? <div className='error'>{ error.signin }</div>:''} */}
         <Link to='/signup' id='singUpLink'>New to myTravels? Sign up here</Link>
      </div>
    </div>
  )
}

export default NewTripForm
