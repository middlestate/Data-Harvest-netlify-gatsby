import React from 'react'
import PropTypes from 'prop-types'
import ProjectPageTemplate from '../../components/ProjectPageTemplate'

const ProjectPagePreview = ({ entry, getAsset }) => {
  return (
    <ProjectPageTemplate
      title={entry.getIn(['data', 'title'])}
      lifecycle_title={entry.getIn(['data', 'lifecycle_title'])}
      lifecycle_description={entry.getIn(['data', 'lifecycle_description'])}
      stage_1_title={entry.getIn(['data', 'stage_1_title'])}
      stage_1_image={entry.getIn(['data', 'stage_1_image'])}
      stage_1_image_after={entry.getIn(['data', 'stage_1_image_after'])}
      stage_2_title={entry.getIn(['data', 'stage_2_title'])}
      stage_2_image={entry.getIn(['data', 'stage_2_image'])}
      stage_2_image_after={entry.getIn(['data', 'stage_2_image_after'])}
      stage_3_title={entry.getIn(['data', 'stage_3_title'])}
      stage_3_image={entry.getIn(['data', 'stage_3_image'])}
      stage_3_image_after={entry.getIn(['data', 'stage_3_image_after'])}
      stage_4_title={entry.getIn(['data', 'stage_4_title'])}
      stage_4_image={entry.getIn(['data', 'stage_4_image'])}
      stage_4_image_after={entry.getIn(['data', 'stage_4_image_after'])}
      stage_5_title={entry.getIn(['data', 'stage_5_title'])}
      stage_5_image={entry.getIn(['data', 'stage_5_image'])}
      stage_5_image_after={entry.getIn(['data', 'stage_5_image_after'])}
      stage_6_title={entry.getIn(['data', 'stage_6_title'])}
      stage_6_image={entry.getIn(['data', 'stage_6_image'])}
      stage_6_image_after={entry.getIn(['data', 'stage_6_image_after'])}
    />
  )
}

ProjectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProjectPagePreview
