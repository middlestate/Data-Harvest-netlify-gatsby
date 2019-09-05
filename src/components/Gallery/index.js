import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ gridItems }, keys) => {
  return (
    <div className='gallery'>
      <div className='container'>
        <div className='columns is-multiline'>
          {gridItems.map(({ image }, keys) => {
            return (
              <div key={keys} className='column is-4'>
                <div className='image_container'>
                  <img src={image} className='gallery_image' alt='project image' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Gallery.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
    })
  ),
}

export default Gallery
