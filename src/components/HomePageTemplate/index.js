import React from 'react'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  heading,
  subheading_part1,
  subheading_part2,
}) => (
  <div>
    <h1 className='title'>{heading}</h1>
    <p className='subheading_part1'>
      {subheading_part1}
      <span className='subheading_part2'>{' ' + subheading_part2}</span>
    </p>
  </div>
)

HomePageTemplate.propTypes = {
  heading: PropTypes.string,
}

export default HomePageTemplate
