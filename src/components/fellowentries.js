import React from 'react'
import Pic from './pic.js'
import {Collapse} from 'react-collapse';
import PicCarousel from './piccarousel.js'

class FellowEntries extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isOpened:false,
      isWide:false
    }
    this.showFellowEntry=this.showFellowEntry.bind(this)
  }

  showFellowEntry=(id)=> {
    this.setState({
      isOpened:!this.state.isOpened,
      isWide:!this.state.isWide
    })
  }

  render(){
    return (
       this.props.entry.show ?

      <div className='fellowEntry overlay'
          onClick={ this.showFellowEntry }
          style={this.state.isWide ? {width:'50vw', transition:'.025s'} : {}}
          data-tripentryid={this.props.entry.trip_entry_id}

        >
          <h3>
            {this.props.entry.title}
          </h3>
            {this.props.entry.title ? <hr className='fellowLines'></hr> : ''}
            <div className='fellowEntryLocName'>
              {this.props.entry.region + ', ' + this.props.entry.country }
            </div>
            {/* <hr className='fellowLines'></hr> */}
            {/* <div className='fellowEntryLocName'>
              From user:{' '+ this.props.entry.name}
            </div> */}
            {/* <hr className='fellowLines'></hr> */}

          <Collapse isOpened={this.state.isOpened}>
            <div className='fellowMemories'>
              {this.props.entry.memory}
            </div>
          </Collapse>
          <div className='fellowPics'>
            { this.state.isOpened ?
              // <PicCarousel public_ids={ this.props.entry.public_id} forFellowEntries ={ true }/> :
              this.props.entry.public_id.map((picId, i) => <Pic className='PicFellowPics' forFellowTravelers={ true } id={ picId } key={ i }/>):
              [this.props.entry.public_id.length > 1 ?
                this.props.entry.public_id.slice(0, 4).map((picId, i) => <Pic className='PicFellowPics' forFellowTravelers={ true } id={ picId } key={ i }/>):
                <Pic id={ this.props.entry.public_id[0] } forFellowTravelers={ true } className='PicFellowPics'/>
              ]
            }
          </div>
          <div>
            <div className='fellowEntryUserName'>
              From user:{' '+ this.props.entry.name}
            </div>
        </div>
      </div>
      :
      ''

    )
  }


}

export default FellowEntries
