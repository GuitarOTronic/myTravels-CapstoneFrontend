import React from 'react'
import { Link } from 'react-router-dom'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import $ from 'jquery';
const Trip= () => {
  return(
    <div className='trip'>
      <div className='imgDiv'>
        <Image cloudName="mytravels" publicId="sample.jpg" >
          <Transformation width="150" crop="scale" />
          <Transformation radius="20" border="2px_solid_black" />
        </Image>
      </div>
      <div className='tripTitleContainer'>
        <h2 className='tripTitle'>Some sexy header</h2>
        <Link to='#'>See trip</Link>
        <form>
          {/* {window.$.cloudinary.config({ cloud_name: 'sample', secure: true})} */}
          <input name="file" type="file" className="cloudinary-fileupload" data-cloudinary-field="seans_the_best"
            data-form-data= {`\"upload_preset\": \"ncc1xgsl\",&quot;callback&quot;: &quot;https://www.example.com/cloudinary_cors.html&quot;`} ></input>
        </form>
      </div>
    </div>
  )
}

export default Trip
