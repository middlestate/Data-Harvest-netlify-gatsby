import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'
import Footer from '../components/Footer/index'

const AboutPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        about_image={frontmatter.about_image}
        title={frontmatter.title}
        description={frontmatter.description}
        subheading={frontmatter.subheading}
        member_1={frontmatter.member_1}
        member_2={frontmatter.member_2}
        member_3={frontmatter.member_3}
        member_4={frontmatter.member_4}
        button_heading={frontmatter.button_heading}
      />
      <Footer footer_background_color={frontmatter.footer_background_color} />
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
        subheading
        member_1
        member_2
        member_3
        member_4
        button_heading
        footer_background_color
      }
    }
  }
`
