import React from 'react'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  title,
}) => (
  <div>
    <h1 className='title'>{title}</h1>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
}

export default HomePageTemplate
