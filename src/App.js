import React, { Component } from 'react';
import './App.css';
import './css/general.css'
import Home from './components/home'
import Login from './components/login'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props)
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  async handleSignIn(e)  {
    e.preventDefault()
    const email = e.target.querySelectorAll('input')[0].value
    const password = e.target.querySelectorAll('input')[1].value
    const body = { email, password }
    console.log(body);
    try{
      let response = await axios.get('localhost:2999/users').then((res)=> {
        console.log('got some users: ', res);
      })
    }catch(error){
      console.log(error);
    }
  }



  render() {
    return (
      <Router>
        <div className='main-container'>
          <Route path = '/' render={() => <Home />}/>
          <Route path = '/login'
            render={() => <Login signIn={ this.handleSignIn }/>}/>


        </div>
      </Router>
    );
  }
}

export default App;
