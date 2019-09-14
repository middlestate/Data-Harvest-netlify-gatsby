import React from 'react'
import PropTypes from 'prop-types'
import AvipPage from '../../components/AvipPage'

const AvipPagePreview = ({ entry, widgetFor }) => (
  <AvipPage
    project_background_image={entry.getIn(['data', 'project_background_image'])}
    project_title={entry.getIn(['data', 'project_title'])}
    project_description_p1={entry.getIn(['data', 'project_description_p1'])}
    project_description_p2={entry.getIn(['data', 'project_description_p2'])}
    project_description_p3={entry.getIn(['data', 'project_description_p3'])}
  />
)

AvipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AvipPagePreview
