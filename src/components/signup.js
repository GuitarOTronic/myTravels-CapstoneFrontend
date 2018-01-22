import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './shared/nav'
import '../css/login.css'

const Signup =({ onSignup }) => {
 return (
   <div className='loginContainer'>
     <div className='formContainer'>
       <h3>Signup</h3>
       <form onSubmit={ onSignup }>
         name:
         <input className ='inputField' type='text' ></input>
         email:
         <input className='inputField' type='text' ></input>
         password:
         <input className='inputField' type='password' ></input>
          <input type="submit" value="Create Account" />

        </form>
        <Link to='/login' id='singUpLink'>Already have an account? Login here</Link>
     </div>
   </div>
 )
}

export default Signup
