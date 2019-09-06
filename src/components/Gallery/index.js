import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ gridItems }, keys) => {
  return (
    <div className='gallery'>
      <div className='container'>
        <div className='columns is-multiline'>
          {gridItems.map(({ image, project_title }, keys) => {
            return (
              <div key={keys} className='column is-4'>
                <h1>{project_title}</h1>
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
      project_title: PropTypes.string,
    })
  ),
}

export default Gallery
