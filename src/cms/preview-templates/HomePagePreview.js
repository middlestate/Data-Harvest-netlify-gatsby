import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'

const HomePagePreview = ({ entry, getAsset }) => {
  return (
    <HomePageTemplate
      heading={entry.getIn(['data', 'heading'])}
      subheading_part1={entry.getIn(['data', 'subheading_part1'])}
      subheading_part2={entry.getIn(['data', 'subheading_part2'])}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
