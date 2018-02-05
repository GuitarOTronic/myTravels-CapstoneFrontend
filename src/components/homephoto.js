import React from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const HomePhotos = ({ pic }) => {

  return (
    <div >
      <Image cloudName="mytravels" publicId={ pic +".jpg"} >
        <Transformation width="200" crop="scale" />
        <Transformation radius="8" border="1px_solid_black" />
      </Image>
    </div>
  )
}

export default HomePhotos
