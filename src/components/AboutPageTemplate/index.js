import React from 'react'
import PropTypes from 'prop-types'

const AboutPageTemplate = ({
  title,
  about_image,
}) => {
  return (
    <section className='about section'>
      <div className='container'>
        <div className='columns'>
          <div className='img-col column'>
            <img src={about_image} alt='about_image' />
          </div>
          <div className='description-col column'>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </section>

  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

export default AboutPageTemplate
