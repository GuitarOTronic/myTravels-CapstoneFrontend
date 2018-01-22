import React, { Component } from 'react';
import './App.css';
import './css/general.css'
import Home from './components/home'
import Login from './components/login'
import Signup from './components/signup'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import axios from 'axios'

const localhost ='http://localhost:2999'

window.AddTokenToHeader = function () {
    let token = localStorage.getItem('token')
    if(token){
      axios.defaults.headers.common['auth'] = token
    }else{
      axios.defaults.headers.common['auth'] = null;
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={}
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  async handleSignIn(e)  {
    e.preventDefault()
    const email = e.target.querySelectorAll('input')[0].value
    const password = e.target.querySelectorAll('input')[1].value
    const body = { email, password }
    try{
      window.AddTokenToHeader();
      console.log(body);
      await axios.post(`${localhost}/users/login`, body).then((token)=> {
        console.log('got a token: ', token);
        localStorage.setItem('token', 'bearer '+ token.data)
      })
    }catch(error){
      console.log(error);
    }
  }

  async handleSignup(e){
    console.log('handleSignup =>  ');
    e.preventDefault()
    const name = e.target.querySelectorAll('input')[0].value
    const email = e.target.querySelectorAll('input')[1].value
    const password = e.target.querySelectorAll('input')[2].value
    const body = {name, email, password}
    console.log(body);
    try{
      await axios.post(`${localhost}/users/signup`, body).then((token) => {
        console.log('token => ', token);
        localStorage.setItem('token', 'bearer ', + token.data )
      })
    }catch (error) {
      console.log('**** Error', error);
    }
  }





  render() {
    return (
      <Router>
        <div className='main-container'>
          <Route path = '/' render={() => <Home />}/>
          <Route path = '/login'
            render = {() => <Login signIn={ this.handleSignIn }/>}/>
          <Route path = '/signup'
            render = {() => <Signup onSignup={ this.handleSignup}/>}/>

        </div>
      </Router>
    );
  }
}

export default App;
