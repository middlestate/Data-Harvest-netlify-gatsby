import React from 'react'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../../components/AboutPageTemplate'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    about_image={entry.getIn(['data', 'about_image'])}
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    subheading={entry.getIn(['data', 'subheading'])}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
