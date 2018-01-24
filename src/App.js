import React, { Component } from 'react';
import './App.css';
import './css/general.css'
import Home from './components/home'
import MyTrips from './components/mytrips'
import Login from './components/login'
import Navigation from './components/shared/nav.js'
import Signup from './components/signup'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import axios from 'axios'

const localhost ='http://localhost:2999'
const CLOUDINARY_URL='cloudinary:128598374176225:bgzbma00NPUAPWTnS39Pz0jbyt0@mytravels'
const cloud_name= 'mytravels'
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
    this.state={
      error:''
    }
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  async componentDidMount(){
    window.$.cloudinary.config({ cloud_name: 'mytravels', secure: true });
    if(window.$.fn.cloudinary_fileupload !== undefined) {
      window.$("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
    }

    //check for local token, verify it, then sign in past users
    let token = localStorage.getItem('token')
    window.AddTokenToHeader()
    await axios.post(`${localhost}/users/pastuser`, token).then(result => {
      let {name, email, id} = result.data.payload

      this.setState({name, email, id})
    })
    console.log('state this: ', this.state);

  }


  async handleLogout(){
    localStorage.setItem('token', '')
    this.setState({name:'', email:'', id:'', loggedIn:false})

  }

  async handleSignIn(e, history) {
    e.preventDefault()
    const email = e.target.querySelectorAll('input')[0].value
    const password = e.target.querySelectorAll('input')[1].value
    const body = { email, password }
    try{
      window.AddTokenToHeader();
      await axios.post(`${localhost}/users/login`, body).then((response)=> {
        localStorage.setItem('token', 'bearer '+ response.data.token)
        this.setState({
            name:response.data.payload.name,
            email:response.data.payload.email,
            id: response.data.payload.id,
            loggedIn:true,
            error:''
          })
          history.push('/mytrips', this.state)
      })
    }catch(error){
      console.log('Error: ', error);
      this.setState({error:{signin:error.response.data.message}})

    }
  }

  async handleSignup(e){
    console.log('handleSignup =>  ');
    e.preventDefault()
    const name = e.target.querySelectorAll('input')[0].value
    const email = e.target.querySelectorAll('input')[1].value
    const password = e.target.querySelectorAll('input')[2].value
    const body = {name, email, password}
      await axios.post(`${localhost}/users/signup`, body).then((response) => {
        localStorage.setItem('token', 'bearer ', + response.data.token )
        this.setState({
            name:response.data.payload.name,
            email:response.data.payload.email,
            id: response.data.payload.id,
            error:''
          })
      }).catch((error) =>{
        console.log('Error:', error.response.data.message);
        this.setState({error:{signup:error.response.data.message}})
    })
  }





  render() {
    return (

      <Router>
        <div>
        <Navigation name={this.state.name} logout={this.handleLogout}/>
        <div className='main-container'>

          {/* <Route path = '/' render={() => <Home name={this.state.name} logout={this.handleLogout}/>}/> */}
          <Route path = '/login'
            render = {(props) => <Login signIn={ this.handleSignIn } error={ this.state.error } stuff={props}/>}/>
          <Route path = '/signup'
            render = {() => <Signup onSignup={ this.handleSignup } error={ this.state.error }/>}/>
          <Route path = '/mytrips'
            render = {() => <MyTrips name={this.state.name} state={ this.state }/>}/>


        </div>
        </div>
      </Router>
    );
  }
}

export default App;
