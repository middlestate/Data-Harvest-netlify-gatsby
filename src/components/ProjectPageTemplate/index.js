import React from 'react'
import PropTypes from 'prop-types'
import Gallery from '../Gallery/index'

const ProjectPageTemplate = ({
  dataharvest_title,
  lifecycle_title,
  lifecycle_description,
  stage_1_title,
  stage_1_image,
  stage_1_image_after,
  stage_2_title,
  stage_2_image,
  stage_2_image_after,
  stage_3_title,
  stage_3_image,
  stage_3_image_after,
  stage_4_title,
  stage_4_image,
  stage_4_image_after,
  stage_5_title,
  stage_5_image,
  stage_5_image_after,
  stage_6_title,
  stage_6_image,
  stage_6_image_after,
  features_title,
  features_subtitle,
  gallery,
}) => (
  <div className='project-page'>
    <section className='project section'>
      <h1>{dataharvest_title}</h1>
    </section>
    <section className='lifecycle section'>
      <h1>{lifecycle_title}</h1>
      <p>{lifecycle_description}</p>
      <div className='stages columns'>
        <div className='stage column'>
          <h3>{stage_1_title}</h3>
          <div className='stage_image_container'>
            <img src={stage_1_image} className='first_image' alt='research' />
            <img src={stage_1_image_after} className='second_image' alt='research_after' />
          </div>
        </div>
        <div className='stage column'>
          <h3>{stage_2_title}</h3>
          <div className='stage_image_container'>
            <img src={stage_2_image} className='first_image' alt='nursery' />
            <img src={stage_2_image_after} className='second_image' alt='nursery_after' />
          </div>
        </div>
        <div className='stage column'>
          <h3>{stage_3_title}</h3>
          <div className='stage_image_container'>
            <img src={stage_3_image} className='first_image' alt='operations' />
            <img src={stage_3_image_after} className='second_image' alt='operations_after' />
          </div>
        </div>
        <div className='stage column'>
          <h3>{stage_4_title}</h3>
          <div className='stage_image_container'>
            <img src={stage_4_image} className='first_image' alt='logistics' />
            <img src={stage_4_image_after} className='second_image' alt='logistics_after' />
          </div>
        </div>
        <div className='stage column'>
          <h3>{stage_5_title}</h3>
          <div className='stage_image_container'>
            <img src={stage_5_image} className='first_image' alt='retail' />
            <img src={stage_5_image_after} className='second_image' alt='retail_after' />
          </div>
        </div>
        <div className='stage column'>
          <h3>{stage_6_title}</h3>
          <div className='stage_image_container'>
            <img src={stage_6_image} className='first_image' alt='consumer' />
            <img src={stage_6_image_after} className='second_image' alt='consumer_after' />
          </div>
        </div>
      </div>
    </section>
    <section className='features section'>
      <h1 className='features_title'>{features_title}</h1>
      <h2 className='features_subtitle'>{features_subtitle}</h2>
      <div className='tiles-container'>
        <Gallery gridItems={gallery.images} />
      </div>
    </section>
  </div>

)

ProjectPageTemplate.propTypes = {
  dataharvest_title: PropTypes.string,
  lifecycle_title: PropTypes.string,
  lifecycle_description: PropTypes.string,
  stage_1_title: PropTypes.string,
  stage_2_title: PropTypes.string,
  stage_3_title: PropTypes.string,
  stage_4_title: PropTypes.string,
  stage_5_title: PropTypes.string,
  stage_6_title: PropTypes.string,
  features_title: PropTypes.string,
  features_subtitle: PropTypes.string,
  gallery: PropTypes.shape({
    images: PropTypes.array,
  }),
}

export default ProjectPageTemplate
