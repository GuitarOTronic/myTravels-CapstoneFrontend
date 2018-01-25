import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import Navigation from './shared/nav'
import '../css/login.css'

const Login =({ error, signIn, ...props }) => {
 return (
   <div className='loginContainer'>
     <div className='loginFormContainer'>
       <h3>Login</h3>
       <form onSubmit={ (e) => signIn(e, props.history) }>
         email:
         <input className='inputField' type='text' ></input>
         password:
         <input className='inputField' type='password' ></input>
        <input type="submit" value="Login"/>

        </form>
        {error ? <div className='error'>{ error.signin }</div>:''}
        <Link to='/signup' id='singUpLink'>New to myTravels? Sign up here</Link>
     </div>
   </div>
 )
}

export default withRouter(Login)
