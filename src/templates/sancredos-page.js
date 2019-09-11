import React from 'react'
import PropTypes from 'prop-types'
import SanCredosPage from '../components/SanCredosPage'

const SanCredosPageTemplate = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <SanCredosPage
      project_title={frontmatter.project_title}
      project_description_p1={frontmatter.project_description_p1}
      project_description_p2={frontmatter.project_description_p2}
      project_description_p3={frontmatter.project_description_p3}
    />
  )
}

SanCredosPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SanCredosPageTemplate

export const pageQuery = graphql`
  query SanCredosPageTemplate($id: String!) {
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
