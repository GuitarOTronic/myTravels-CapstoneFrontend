import React from 'react'
import { Link } from 'react-router-dom'
// import Navigation from './shared/nav'
import '../css/login.css'

const Signup =({ error, onSignup }) => {
 return (
   <div className='loginContainer'>
     <div className='formContainer'>
       <h3>Signup</h3>
       <form onSubmit={ onSignup }>
         name:
         <input required className ='inputField' type='text' ></input>
         email:
         <input required className='inputField' type='email' ></input>
         password:
         <input required className='inputField' type='password' ></input>
          <input type="submit" value="Create Account" />

        </form>
        <div id='signupError'></div>
        {error ? <div className='error'>{error.signup}</div>: ''}
        <Link to='/login' id='singUpLink'>Already have an account? Login here</Link>
     </div>
   </div>
 )
}

export default Signup
