import React from 'react'
import PropTypes from 'prop-types'
import LaborCommunicationsPage from '../components/LaborCommunicationsPage'

const LaborCommunicationsPageTemplate = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <LaborCommunicationsPage
      project_title={frontmatter.project_title}
      project_description_p1={frontmatter.project_description_p1}
      project_description_p2={frontmatter.project_description_p2}
      project_description_p3={frontmatter.project_description_p3}
    />
  )
}

LaborCommunicationsPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LaborCommunicationsPageTemplate

export const pageQuery = graphql`
  query LaborCommunicationsPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        project_title
        project_description_p1
        project_description_p2
        project_description_p3
      }
    }
  }
`
