import React from 'react'
import PropTypes from 'prop-types'
import PrimeGloryPage from '../../components/PrimeGloryPage'

const PrimeGloryPagePreview = ({ entry, widgetFor }) => (
  <PrimeGloryPage
    project_background_image={entry.getIn(['data', 'project_background_image'])}
    project_title={entry.getIn(['data', 'project_title'])}
    project_description_p1={entry.getIn(['data', 'project_description_p1'])}
    project_description_p2={entry.getIn(['data', 'project_description_p2'])}
    project_description_p3={entry.getIn(['data', 'project_description_p3'])}
  />
)

PrimeGloryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PrimeGloryPagePreview
