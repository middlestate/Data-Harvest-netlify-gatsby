import React from 'react'
import PropTypes from 'prop-types'
import SecurityPage from '../../components/SecurityPage'

const SecurityPagePreview = ({ entry, widgetFor }) => (
  <SecurityPage
    project_title={entry.getIn(['data', 'project_title'])}
    project_description_p1={entry.getIn(['data', 'project_description_p1'])}
    project_description_p2={entry.getIn(['data', 'project_description_p2'])}
    project_description_p3={entry.getIn(['data', 'project_description_p3'])}
  />
)

SecurityPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SecurityPagePreview