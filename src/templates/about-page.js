import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'

const AboutPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        about_image={frontmatter.about_image}
        title={frontmatter.title}
        description={frontmatter.description}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        about_image
        title
        description
      }
    }
  }
`
