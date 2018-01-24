import React from 'react'
import { Link } from 'react-router-dom'
const NewTripForm = () => {
  return(
    <div className='loginContainer'>
      <div className='formContainer'>
        <h3>Login</h3>
        <form >
          email:
          <input className='inputField' type='text' ></input>
          password:
          <input className='inputField' type='password' ></input>
         <input type="submit" value="Login"/>

         </form>
         {/* {error ? <div className='error'>{ error.signin }</div>:''} */}
         <Link to='/signup' id='singUpLink'>New to myTravels? Sign up here</Link>
      </div>
    </div>
  )
}

export default NewTripForm
