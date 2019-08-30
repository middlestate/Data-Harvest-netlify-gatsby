import React from 'react'
import PropTypes from 'prop-types'

const ProjectPageTemplate = ({
  title,
  lifecycle_title,
  lifecycle_description,
  stage_1_title,
  stage_2_title,
  stage_3_title,
  stage_4_title,
  stage_5_title,
  stage_6_title,
}) => (
  <div className='project-page'>
    <section className='project section'>
      <h1>{title}</h1>
    </section>
    <section className='lifecycle section'>
      <h1>{lifecycle_title}</h1>
      <p>{lifecycle_description}</p>
      <div className='stages'>
        <div className='stage'>
          <h3>{stage_1_title}</h3>
        </div>
        <div className='stage'>
          <h3>{stage_2_title}</h3>
        </div>
        <div className='stage'>
          <h3>{stage_3_title}</h3>
        </div>
        <div className='stage'>
          <h3>{stage_4_title}</h3>
        </div>
        <div className='stage'>
          <h3>{stage_5_title}</h3>
        </div>
        <div className='stage'>
          <h3>{stage_6_title}</h3>
        </div>
      </div>
    </section>
  </div>

)

ProjectPageTemplate.propTypes = {
  title: PropTypes.string,
  lifecycle_title: PropTypes.string,
  lifecycle_description: PropTypes.string,
  stage_1_title: PropTypes.string,
  stage_2_title: PropTypes.string,
  stage_3_title: PropTypes.string,
  stage_4_title: PropTypes.string,
  stage_5_title: PropTypes.string,
  stage_6_title: PropTypes.string,
}

export default ProjectPageTemplate
