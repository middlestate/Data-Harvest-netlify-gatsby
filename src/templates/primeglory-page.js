import React from 'react'
import PropTypes from 'prop-types'
import PrimeGloryPage from '../components/PrimeGloryPage'

const PrimeGloryPageTemplate = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <PrimeGloryPage
      project_title={frontmatter.project_title}
      project_description_p1={frontmatter.project_description_p1}
      project_description_p2={frontmatter.project_description_p2}
      project_description_p3={frontmatter.project_description_p3}
    />
  )
}

PrimeGloryPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PrimeGloryPageTemplate

export const pageQuery = graphql`
  query PrimeGloryPageTemplate($id: String!) {
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
