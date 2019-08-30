import React from 'react'
import PropTypes from 'prop-types'

const ProjectPageTemplate = ({
  title,
  lifecycle_title,
}) => (
  <div className='project-page'>
    <section className='project section'>
      <h1>{title}</h1>
    </section>
    <section className='lifecycle section'>
      <h1>{lifecycle_title}</h1>
    </section>
  </div>

)

ProjectPageTemplate.propTypes = {
  title: PropTypes.string,
  lifecycle_title: PropTypes.string,
}

export default ProjectPageTemplate
