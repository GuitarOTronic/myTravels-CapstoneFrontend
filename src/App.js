import React, { Component } from 'react';
import './App.css';
import './css/general.css'
import MyTrips from './components/mytrips'
import Home from './components/home'
import Login from './components/login'
import FellowTravelers from './components/fellowtravelers.js'
import Navigation from './components/shared/nav.js'
import Signup from './components/signup'
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

const localhost = process.env.REACT_APP_LOCAL_HOST
// change .env for server
//REACT_APP_LOCAL_HOST='http://localhost:2999'
// REACT_APP_LOCAL_HOST='https://mytravels-capstone.herokuapp.com'


window.CLOUDINARY_URL=' https://api.cloudinary.com/v1_1/mytravels/image/upload'
const cloud_name= 'mytravels'


window.AddTokenToHeader = function () {
    let token = localStorage.getItem('token')
    if(token){
      axios.defaults.headers.common['auth'] = token
    }else{
      axios.defaults.headers.common['auth'] = null;
  }
}
window.$.cloudinary.config({ cloud_name: 'mytravels', secure: true });
// if(window.$.fn.cloudinary_fileupload !== undefined) {
//   window.$("input.cloudinary-fileupload[type=file]").cloudinary_fileupload().bind('cloudinarydone', function(e, data) {
//       console.log('data ', data);
//       this.props.addPhoto(data.result.public_id, data.result.url)
//     })
//   }

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      error:'',
      showCarousel:false,
      showAllTripPics:false,
    }
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleCreateNewTrip = this.handleCreateNewTrip.bind(this)
    this.toggleShowAllTripPics = this.toggleShowAllTripPics.bind(this)
  }

  async componentDidMount(){

    //check for local token, verify it, then sign in past users
    let token = localStorage.getItem('token')
    window.AddTokenToHeader()
    await axios.post(`${localhost}/users/pastuser`, token).then(result => {
      let {name, email, id} = result.data.payload

      this.setState({name, email, id})
    })
  }

  async handleCreateNewTrip(title, country, region, userId, history){
    console.log('handle createNewTrip =>', history);
    const user_id = this.state.id
    const body = {title, country, region, user_id}
    await axios.post(`${localhost}/trips`, body).then(response => {
      console.log('handled createNewTrip => ', response);
      // this.history.push('/mytrips', this.state)
    })
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

  resetTripId =() => {
    // this.props.history.push('/mytrips', this.state)
    this.setState({tripId:'', tripName:'', showCarousel:false})
  }

  setTripId = (tripId, tripName) => {
    console.log('tripId ', tripId);
    this.setState({tripId, tripName})
  }

  toggleShowAllTripPics = async () => {

    await axios.get(`${localhost}/pics/trip/${this.state.tripId}`).then(ids => {
      console.log('ids', ids.data.ids);
        this.setState({
          showAllTripPics:!this.state.showAllTripPics,
          tripPicIds:ids.data.ids
        })

    })

  }

  toggleCarousel = () => {
    this.setState({showCarousel:!this.state.showCarousel})
  }




  render() {
    return (

      <Router>
        <div>
        <Navigation name={this.state.name} logout={this.handleLogout} resetTripId = {this.resetTripId}/>
        <div className='main-container' id='main'>

          <Route exact path = '/' render={() => <Home name={this.state.name} logout={this.handleLogout}/>}/>
          <Route path = '/fellowtravelers'
            render = {(props) => <FellowTravelers props={ props }/> }
          />
          <Route path = '/login'
            render = {(props) => <Login
              signIn={ this.handleSignIn }
              error={ this.state.error }
              props={props}/>}
            />
          <Route path = '/signup'
            render = {() => <Signup onSignup={ this.handleSignup } error={ this.state.error }/>}/>
          <Route path = '/mytrips'
            render = {(props) => <MyTrips
              toggleShowAllTripPics={ this.toggleShowAllTripPics }
              showAllTripPics={ this.state.showAllTripPics }
              showCarousel={ this.state.showCarousel}
              toggleCarousel={ this.toggleCarousel }
              createNewTrip={ this.handleCreateNewTrip }
              tripPicIds={ this.state.tripPicIds }
              props={ props }
              tripName={this.state.tripName}
              setTripId={ this.setTripId }
              tripId={ this.state.tripId }
              name={ this.state.name }
              state={ this.state }
              />}
            />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
