import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './shared/nav'
import '../css/login.css'

const Login =({signIn}) => {
 return (
   <div className='loginContainer'>
     <div className='formContainer'>
       <h3>Login</h3>
       <form onSubmit={ signIn }>
         email:
         <input className='inputField' type='text' ></input>
         password:
         <input className='inputField' type='password' ></input>
          <input type="submit" value="Login" />

        </form>
        <Link to='/signup' id='singUpLink'>New to myTravels? Sign up here</Link>
     </div>
   </div>
 )
}

export default Login
