import React from 'react'
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
     </div>
   </div>
 )
}

export default Login
