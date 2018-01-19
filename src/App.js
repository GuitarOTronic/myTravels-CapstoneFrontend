import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import Login from './components/login'
import './css/general.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
  }



  render() {
    return (
      <Router>
        <div className='main-container'>
          <Route path = '/' render={() => <Home />}/>
          <Route path = '/login' render={() => <Login />}/>


        </div>
      </Router>
    );
  }
}

export default App;
