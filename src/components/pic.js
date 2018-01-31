import React from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const Pic =({id}) => {
  console.log('pic>>> ', id);
  return(
    // <div><img src={id} /></div>
    // <Image src={ id }/>
    <div>
      <Image cloudName='mytravels' publicId={id}>
        <Transformation width='400' crop="scale" />
      </Image>
    </div>

  )
}

export default Pic
