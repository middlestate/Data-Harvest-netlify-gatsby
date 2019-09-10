import React from 'react'
import PropTypes from 'prop-types'
import FirstBlockLedgerPage from '../components/FirstBlockLedgerPage'

const FirstBlockLedgerPageTemplate = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <FirstBlockLedgerPage
      project_title={frontmatter.project_title}
      project_description_p1={frontmatter.project_description_p1}
      project_description_p2={frontmatter.project_description_p2}
      project_description_p3={frontmatter.project_description_p3}
    />
  )
}

FirstBlockLedgerPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FirstBlockLedgerPageTemplate

export const pageQuery = graphql`
  query FirstBlockLedgerPageTemplate($id: String!) {
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
