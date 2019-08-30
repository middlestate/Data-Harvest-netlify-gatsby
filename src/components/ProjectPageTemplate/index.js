import React from 'react'
import PropTypes from 'prop-types'

const ProjectPageTemplate = ({
  title,
}) => (
  <div>
    <h1>{title}</h1>
  </div>
)

ProjectPageTemplate.PropTypes = {
  title: PropTypes.string,
}

export default ProjectPageTemplate
