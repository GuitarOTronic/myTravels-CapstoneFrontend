import React from 'react'
import {Link} from 'react-router-dom'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import moment from 'moment'
import DatePicker from 'react-datepicker';
import ReactModal from 'react-modal';
import 'react-datepicker/dist/react-datepicker.css';
import cloudinary from 'cloudinary-core'
import axios from 'axios'
import MyTrips from './mytrips.js'
const cl = new cloudinary.Cloudinary({ cloud_name: 'mytravels', secure: true})
const localhost ='http://localhost:2999'
class EntryReactModal extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isOpen:props.isOpen,
      userId:this.props.userId,
      tripId:this.props.tripId

    }

  }

  closeModal = () => {
    this.setState({isOpen:false})

  }

  addPhotoToState =()=> {
    console.log('helo');
  }

  getTripId(){
    console.log('getTripId()');
    return this.props.tripId
  }

  componentDidUpdate(){
    ReactModal.setAppElement('#main');

    window.$.cloudinary.config({ cloud_name: 'mytravels', secure: true });
     window.userId = this.props.userId
     window.tripId = this.props.tripId
    if(window.$.fn.cloudinary_fileupload !== undefined) {
      window.$("input.cloudinary-fileupload[type=file]").cloudinary_fileupload().bind('cloudinarydone', function(e, data) {
          console.log('data ', data);
          let public_id = data.result.public_id
          let url = data.result.url


            let body = {
              public_id: public_id,
              trip_id:window.tripId,
              user_id:window.userId,
              trip_entry_id:window.tripEntryId,
              url:url
            }
            console.log('body', body);
           axios.post(`${localhost}/pics`, body).then(response => {
             console.log(response);
            }).catch((err) => {
              console.error();
            })

            // this.setState({ photoId: [...this.state.photoId, public_id] })


        })
      }
  }

  render(){
      console.log('modal is mounted', this.state.isOpen, 'tripEntryId', this.props.tripEntryId);
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel="Modal"
        onRequestClose={this.props.onRequestClose}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={true}
        style={{
           overlay:{
             width:'100vw'
           },
           content:{
            position:'absolute',
            width:'50vw',
            top: '20%',
            left: '25%',
            right: '25%',
            bottom: '20%',
            border: '1px solid #E94858',
            background: '#82BF6E',
            overflo: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '0px'
           }
         }}
        >

        <div className = 'entryFormModal'>

            <div className='modalHeader'>
                <h2>New Memory</h2>
                <button className='modalX' onClick={this.props.onRequestClose}>X</button>
            </div>
            <form className='modalForm' onSubmit={this.props.createMemory}>
              <div className='modalFormContent' >
                Title: <input className='memoryTitle' required></input>
                Date:
                <DatePicker selected={this.props.startDate} onChange={this.props.handleChange}/>
                Memories: <textarea type='text' required placeholder='Tell us about what you did today'></textarea>
                <label> Make memory and photos public
                  {/* <input type='checkbox' defaultChecked={true} onChange= ></input> */}
                </label>
                <input name="file" multiple='true' id='uploadPix' type="file" className="cloudinary-fileupload" data-cloudinary-field="wompwomp"
                data-form-data="{&quot;upload_preset&quot;: &quot;ncc1xgsl&quot;}"></input>
              </div>
              <input type="submit" value="Create Memory"  className="upload-button" />
          </form>
        </div>
      </ReactModal>
    )
  }


}

export default EntryReactModal
