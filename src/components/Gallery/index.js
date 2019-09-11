import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

const Gallery = ({ gridItems }, keys) => {
  return (
    <div className='gallery'>
      <div className='container'>
        <div className='columns is-multiline'>
          {gridItems.map(({ image, project_title, url }, keys) => {
            return (
              <div key={keys} className='column is-4'>
                <h1>{project_title}</h1>
                <div className='image_container'>
                  <Link to={url}>
                    <img src={image} className='gallery_image' alt='project image' />                  
                  </Link>
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
      url: PropTypes.string,
    })
  ),
}

export default Gallery
