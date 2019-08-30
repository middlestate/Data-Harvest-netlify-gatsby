import React from 'react'
import PropTypes from 'prop-types'

const ProjectPageTemplate = ({
  title,
  lifecycle_title,
  lifecycle_description,
}) => (
  <div className='project-page'>
    <section className='project section'>
      <h1>{title}</h1>
    </section>
    <section className='lifecycle section'>
      <h1>{lifecycle_title}</h1>
      <p>{lifecycle_description}</p>
    </section>
  </div>

)

ProjectPageTemplate.propTypes = {
  title: PropTypes.string,
  lifecycle_title: PropTypes.string,
  lifecycle_description: PropTypes.string,
}

export default ProjectPageTemplate
