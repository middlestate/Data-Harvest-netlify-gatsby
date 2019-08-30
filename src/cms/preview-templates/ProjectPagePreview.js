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
      stage_2_title={entry.getIn(['data', 'stage_2_title'])}
      stage_3_title={entry.getIn(['data', 'stage_3_title'])}
      stage_4_title={entry.getIn(['data', 'stage_4_title'])}
      stage_5_title={entry.getIn(['data', 'stage_5_title'])}
      stage_6_title={entry.getIn(['data', 'stage_6_title'])}
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
