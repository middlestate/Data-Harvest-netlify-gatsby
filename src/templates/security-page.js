import React from 'react'
import PropTypes from 'prop-types'
import SecurityPage from '../components/SecurityPage'

const SecurityPageTemplate = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <SecurityPage
      project_title={frontmatter.project_title}
      project_description_p1={frontmatter.project_description_p1}
      project_description_p2={frontmatter.project_description_p2}
      project_description_p3={frontmatter.project_description_p3}
    />
  )
}

SecurityPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SecurityPageTemplate

export const pageQuery = graphql`
  query SecurityPageTemplate($id: String!) {
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
