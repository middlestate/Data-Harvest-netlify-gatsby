import React from 'react'
import PropTypes from 'prop-types'
import AvipPage from '../components/AvipPage'

const AvipPageTemplate = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <AvipPage
      project_title={frontmatter.project_title}
      project_description_p1={frontmatter.project_description_p1}
      project_description_p2={frontmatter.project_description_p2}
      project_description_p3={frontmatter.project_description_p3}
    />
  )
}

AvipPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AvipPageTemplate

export const pageQuery = graphql`
  query AvipPageTemplate($id: String!) {
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
