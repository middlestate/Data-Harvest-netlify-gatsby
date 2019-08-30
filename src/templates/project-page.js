import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import ProjectPageTemplate from '../components/ProjectPageTemplate'
import Layout from '../components/Layout'
import Footer from '../components/Footer/index'

const ProjectPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <Layout>
      <ProjectPageTemplate
        title={frontmatter.title}
        lifecycle_title={frontmatter.lifecycle_title}
        lifecycle_description={frontmatter.lifecycle_description}
        stage_1_title={frontmatter.stage_1_title}
        stage_2_title={frontmatter.stage_2_title}
        stage_3_title={frontmatter.stage_3_title}
        stage_4_title={frontmatter.stage_4_title}
        stage_5_title={frontmatter.stage_5_title}
        stage_6_title={frontmatter.stage_6_title}
      />
      <Footer footer_background_color={frontmatter.footer_background_color} />
    </Layout>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        lifecycle_title
        lifecycle_description
        footer_background_color
        stage_1_title
        stage_2_title
        stage_3_title
        stage_4_title
        stage_5_title
        stage_6_title
      }
    }
  }
`
