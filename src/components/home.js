import React from 'react'
import '../css/home.css'
import HomePhotos from './homephoto.js'
import axios from 'axios'
import _ from 'lodash'
import Sidebar from './sidebar.js'
const localhost ='https://mytravels-capstone.herokuapp.com'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      picArr:[]
    }
    // this.getHomePhotos = this.getHomePhotos.bind(this)
  }

  async componentDidMount() {
    this.getHomePhotos()
  }
   getHomePhotos = () => {
    axios.get(`${localhost}/pics`).then( response => {
      console.log('dinkle',response.data);
      // let shuffledPix = response.data.
      let shuffledPix=_.shuffle(response.data)

      this.setState({picArr:shuffledPix})
    })
  }

  render(){
    return (
      <div>
        <div className='photoContainer'>
          <div className='homePhotos'>
            {this.state.picArr.map((pic, i ) => <HomePhotos pic={ pic } key= { i }/>)}
          </div>
          {/* <Sidebar /> */}
        </div>
      </div>


    )
  }

}


export default Home
