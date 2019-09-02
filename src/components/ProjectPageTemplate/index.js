import React from 'react'
import PropTypes from 'prop-types'

const ProjectPageTemplate = ({
  title,
  lifecycle_title,
  lifecycle_description,
  stage_1_title,
  stage_1_image,
  stage_2_title,
  stage_2_image,
  stage_3_title,
  stage_3_image,
  stage_4_title,
  stage_4_image,
  stage_5_title,
  stage_5_image,
  stage_6_title,
  stage_6_image,
}) => (
  <div className='project-page'>
    <section className='project section'>
      <h1>{title}</h1>
    </section>
    <section className='lifecycle section'>
      <h1>{lifecycle_title}</h1>
      <p>{lifecycle_description}</p>
      <div className='stages columns'>
        <div className='stage column'>
          <h3>{stage_1_title}</h3>
          <img src={stage_1_image} alt='research' />
        </div>
        <div className='stage column'>
          <h3>{stage_2_title}</h3>
          <img src={stage_2_image} alt='nursery' />
        </div>
        <div className='stage column'>
          <h3>{stage_3_title}</h3>
          <img src={stage_3_image} alt='operations' />
        </div>
        <div className='stage column'>
          <h3>{stage_4_title}</h3>
          <img src={stage_4_image} alt='logistics' />
        </div>
        <div className='stage column'>
          <h3>{stage_5_title}</h3>
          <img src={stage_5_image} alt='retail' />
        </div>
        <div className='stage column'>
          <h3>{stage_6_title}</h3>
          <img src={stage_6_image} alt='consumer' />
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
