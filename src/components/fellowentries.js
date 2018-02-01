import React from 'react'
import Pic from './pic.js'
import {Collapse} from 'react-collapse';

class FellowEntries extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isOpened:false,
    }
    this.showFellowEntry=this.showFellowEntry.bind(this)
  }

  showFellowEntry=(id)=> {
    // console.log(id);
    this.setState({isOpened:!this.state.isOpened})
  }

  // } =({ entry, showFellowEntry }) => {
  //   console.log('entry>>>>> ', entry);
  render(){
    return (
      <div className='fellowEntry overlay' onClick={ this.showFellowEntry(this.props.entry.trip_entry_id) } data-tripEntryId={this.props.entry.trip_entry_id}>
          <h3>
            {this.props.entry.title}
          </h3>
            <hr></hr>
            Location: {this.props.entry.region + ', ' + this.props.entry.country }
            <hr></hr>
            From user:{' '+ this.props.entry.name}
            <hr></hr>
            <div className='fellowPics'>
              {this.props.entry.public_id.length > 1 ?

                this.props.entry.public_id.map((picId, i) => <Pic className='PicFellowPics' forFellowTravelers={ true } id={ picId } key={ i }/>):
                <Pic id={ this.props.entry.public_id[0] } forFellowTravelers={ true } className='PicFellowPics'/>
              }
            </div>
        <Collapse isOpened={this.state.isOpened}>
          <div>
            {this.props.entry.memory}
          </div>
        </Collapse>


      </div>
    )
  }


}

export default FellowEntries
