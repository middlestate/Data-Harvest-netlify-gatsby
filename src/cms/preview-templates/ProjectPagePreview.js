import React from 'react'
import PropTypes from 'prop-types'
import ProjectPageTemplate from '../../components/ProjectPageTemplate'

const ProjectPagePreview = ({ entry, getAsset }) => {
  return (
    <ProjectPageTemplate
      title={entry.getIn(['data', 'title'])}
      lifecycle_title={entry.getIn(['data', 'lifecycle_title'])}
      lifecycle_description={entry.getIn(['data', 'lifecycle_description'])}
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
