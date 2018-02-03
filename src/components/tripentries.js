import React from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import '../css/tripentries.css'
import {Collapse} from 'react-collapse';
import moment from 'moment'
import axios from 'axios'
const localhost = process.env.REACT_APP_LOCAL_HOST


class TripEntries extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isOpened:false,
      deleted:false
    }
    this.memory=this.props.memory
    this.photoId=this.props.photoId
    this.title=this.props.title
    this.id = this.props.id
    this.date=this.props.date
    this.toggleDeleteConfirm = this.toggleDeleteConfirm.bind(this)
    this.deleteTripEntry = this.deleteTripEntry.bind(this)
  }

  deleteTripEntry = async () => {
    let tripEntryId = this.props.id
    await axios.delete(`${localhost}/tripEntries/${tripEntryId}`).then(response => {

      this.setState({deleted:true})
    })
  }
  // deleteTripEntry = () => {
  //   this.props.deleteTripEntry(this.props.id)
  // }

  toggleDeleteConfirm = ()=> {
    console.log(this.props.id);
    this.setState({isOpened:!this.state.isOpened})
  }

   goToTripEntry = (e, id) => {
    this.props.toggleCarousel(this.id)
  }

  render(){
    moment().format("MMM Do YY");
    let createdAt = moment(this.date).format( "MMMM Do YYYY")
    return(
      <div className='memoryContainer' style={this.state.deleted ? {display:'none'} : {display:'flex'}}>
        <div>
          <h3>{ this.title }</h3>
        </div>
        <hr></hr>
        <div>
          <h4>{ createdAt }</h4>
        </div>
        <p>
          { this.memory }
        </p>
        <div className='photosContainer'>
          {  this.photoId[this.id]!==undefined ?
            this.photoId[this.id].map((photo, i) => <Image onClick={(e)=> this.goToTripEntry(e, this.id) } cloudName="mytravels" publicId={photo +".jpg" } key ={ i }>
              <Transformation height="150" crop="scale" />
              <Transformation radius="0" border="1px_solid_black" />
            </Image>)
            :''
          }
        </div>
        <div className='userAlterataionsContainer'>
          <div className='tripEntryBtnContainer'>
            <button>Edit</button>
            <button onClick={ this.toggleDeleteConfirm }> Delete </button>
          </div>
          <div >
            <Collapse isOpened={this.state.isOpened} style={{'padding-left':'25%'}}>
              <div className='confirmationMessage'>
                <p>Are you sure you want to delete this memory?</p>
                <div className='confirmationMessageBtns'>
                  <button onClick={this.deleteTripEntry}>Yes</button>
                  <button onClick={this.toggleDeleteConfirm}>No</button>
                </div>

              </div>

            </Collapse>
          </div>
        </div>
      </div>

    )
  }
}

export default TripEntries
