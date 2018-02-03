import React from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const Pic =({id, forFellowTravelers}) => {
  return(
    // <div><img src={id} /></div>
    // <Image src={ id }/>
    <div>
      { forFellowTravelers ?
        <div className='PicFellowPics'>
          <Image cloudName='mytravels' publicId={id}>
            <Transformation width='100' crop="scale" />
          </Image>
        </div>
        :
        <div className='PicFellowPics'>
          <Image cloudName='mytravels' publicId={id}>
            <Transformation width='400' crop="scale" />
          </Image>
        </div>
      }
    </div>
  )
}

export default Pic
