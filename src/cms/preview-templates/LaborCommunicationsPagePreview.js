import React from 'react'
import PropTypes from 'prop-types'
import LaborCommunicationsPage from '../../components/LaborCommunicationsPage'

const LaborCommunicationsPagePreview = ({ entry, widgetFor }) => (
  <LaborCommunicationsPage
    project_background_image={entry.getIn(['data', 'project_background_image'])}
    project_title={entry.getIn(['data', 'project_title'])}
    project_description_p1={entry.getIn(['data', 'project_description_p1'])}
    project_description_p2={entry.getIn(['data', 'project_description_p2'])}
    project_description_p3={entry.getIn(['data', 'project_description_p3'])}
  />
)

LaborCommunicationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LaborCommunicationsPagePreview
