import React from 'react'
import PropTypes from 'prop-types'

const SecurityPage = ({
  project_background_image,
  project_title,
  project_description_p1,
  project_description_p2,
  project_description_p3,
}) => (
  <div className='gallery_image_page'>
    <section className='project_hero section' style={{background: `linear-gradient(rgba(0,0,0, .5),rgba(0,0,0, .5)),url(${project_background_image})`}}>
      <h1 className='project_title'>{project_title}</h1>
    </section>
    <section className='project_description_container section'>
      <p className='project_description'>{project_description_p1}</p>
      <p className='project_description'>{project_description_p2}</p>
      <p className='project_description'>{project_description_p3}</p>
    </section>
  </div>
)

SecurityPage.propTypes = {
  project_title: PropTypes.string,
  project_description_p1: PropTypes.string,
  project_description_p2: PropTypes.string,
  project_description_p3: PropTypes.string,
}

export default SecurityPage

