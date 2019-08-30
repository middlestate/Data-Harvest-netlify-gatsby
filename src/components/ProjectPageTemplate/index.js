import React from 'react'
import PropTypes from 'prop-types'

const ProjectPageTemplate = ({
  title,
}) => (
  <div>
    <section className='project section'>
      <h1>{title}</h1>
    </section>
  </div>

)

ProjectPageTemplate.propTypes = {
  title: PropTypes.string,
}

export default ProjectPageTemplate
