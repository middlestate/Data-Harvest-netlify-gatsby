import React from 'react'
import PropTypes from 'prop-types'
import ProjectPageTemplate from '../../components/ProjectPageTemplate'

const ProjectPagePreview = ({ entry, getAsset }) => {
  return (
    <ProjectPageTemplate
      title={entry.getIn(['data', 'title'])}
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
