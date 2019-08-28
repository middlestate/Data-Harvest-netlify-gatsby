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
      avocado_image={entry.getIn(['data', 'avocado_image'])}
      intel_image={entry.getIn(['data', 'intel_image'])}
      hyperledger_image={entry.getIn(['data', 'hyperledger_image'])}
      IBM_image={entry.getIn(['data', 'IBM_image'])}
      linux_image={entry.getIn(['data', 'linux_image'])}
      spotlight_image={entry.getIn(['data', 'spotlight_image'])}
      spotlight_heading={entry.getIn(['data', 'spotlight_heading'])}
      spotlight_subheading={entry.getIn(['data', 'spotlight_subheading'])}
      spotlight_description={entry.getIn(['data', 'spotlight_description'])}
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
