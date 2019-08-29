import React from 'react'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../../components/AboutPageTemplate'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    about_image={entry.getIn(['data', 'about_image'])}
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    subheading={entry.getIn(['data', 'subheading'])}
    member_1={entry.getIn(['data', 'member_1'])}
    member_2={entry.getIn(['data', 'member_2'])}
    member_3={entry.getIn(['data', 'member_3'])}
    member_4={entry.getIn(['data', 'member_4'])}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
