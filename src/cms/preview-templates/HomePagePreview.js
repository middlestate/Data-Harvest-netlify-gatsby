import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'

const HomePagePreview = ({ entry, getAsset }) => {
  return (
    <HomePageTemplate
      heading={entry.getIn(['data', 'heading'])}
      subheading_part1={entry.getIn(['data', 'subheading_part1'])}
      subheading_part2={entry.getIn(['data', 'subheading_part2'])}
      avocado_heading={entry.getIn(['data', 'avocado_heading'])}
      avocado_subheading={entry.getIn(['data', 'avocado_subheading'])}
      avocado_description={entry.getIn(['data', 'avocado_description'])}
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
