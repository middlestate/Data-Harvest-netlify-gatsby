import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ gridItems }, keys) => {
  return (
    <div className='gallery-row'>
      <div className='container'>
        <div className='columns'>
          {gridItems.slice(0, 3).map(({ image }, keys) => {
            return (
              <div className='column'>
                <img src={image} key={keys} alt='project image' />
              </div>
            )
          })}
        </div>
        <div className='columns'>
          {gridItems.slice(3, 7).map(({ image }, keys) => {
            return (
              <div className='column'>
                <img src={image} key={keys} alt='project image' />
              </div>
            )
          })}
        </div>
        <div className='columns'>
          {gridItems.slice(7, gridItems.length).map(({ image }, keys) => {
            return (
              <div className='column'>
                <img src={image} key={keys} alt='project image' />
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
