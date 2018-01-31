import React from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import '../css/tripentries.css'
import moment from 'moment'



class TripEntries extends React.Component {
  constructor(props){
    super(props)
    this.memory=this.props.memory
    this.photoId=this.props.photoId
    this.title=this.props.title
    this.id = this.props.id
    this.date=this.props.date
  }

   goToTripEntry = (e, id) => {
    this.props.toggleCarousel(this.id)
  }

  render(){
    moment().format("MMM Do YY");
    let createdAt = moment(this.date).format( "MMMM Do YYYY")
    return(
      <div className='memoryContainer'>
        <div>
          <h3>{ this.title }</h3>
        </div>
        <div>
          <h4>{ createdAt }</h4>
        </div>
        <p>
          { this.memory }
        </p>
        <div className='photosContainer'>
          {  this.photoId[this.id]!==undefined ?
            this.photoId[this.id].map((photo, i) => <Image onClick={(e)=> this.goToTripEntry(e, this.id) } cloudName="mytravels" publicId={photo +".jpg" } key ={ i }>
              <Transformation width="150" crop="scale" />
              <Transformation radius="0" border="1px_solid_black" />
            </Image>)
            :''
           // <Image cloudName="mytravels" publicId={ photoId[id] +".jpg" } >
           //    <Transformation width="150" crop="scale" />
           //    <Transformation radius="0" border="1px_solid_black" />
           //  </Image>
          }
        </div>
      </div>

    )
  }
}

export default TripEntries
