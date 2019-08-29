import React from 'react'
import PropTypes from 'prop-types'

const AboutPageTemplate = ({
  about_image,
  title,
  description,
  subheading,
  member_1,
  member_2,
  member_3,
  member_4,
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
            <p>{description}</p>
            <h2>{subheading}</h2>
            <h3>{member_1}</h3>
            <h3>{member_2}</h3>
            <h3>{member_3}</h3>
            <h3>{member_4}</h3>
          </div>
        </div>
      </div>
    </section>

  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  subheading: PropTypes.string,
  member_1: PropTypes.string,
  member_2: PropTypes.string,
  member_3: PropTypes.string,
  member_4: PropTypes.string,
}

export default AboutPageTemplate
