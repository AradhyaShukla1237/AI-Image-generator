import React from 'react' 
import './ImageGenerator.css'
/* import default_image from './assets/default_image.JPG' */

const ImageGenerator = () => {
  return(
    <div>
      <div className='ai-image-generator'>
        <div className='header'>Ai Image <span>Generator</span></div>
         <div className='img-loading'>
         <div className='image'></div>
           
        </div>
        <div className='search-box'>
          <input type='text' className='search-input' placeholder='Describe What You Want To See' />
          <div className='generate-btn'>Generate</div>
        </div>
      </div>
    </div>
  )
}

export default ImageGenerator