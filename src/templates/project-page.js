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
        stage_1_image={frontmatter.stage_1_image}
        stage_1_image_after={frontmatter.stage_1_image_after}
        stage_2_title={frontmatter.stage_2_title}
        stage_2_image={frontmatter.stage_2_image}
        stage_2_image_after={frontmatter.stage_2_image_after}
        stage_3_title={frontmatter.stage_3_title}
        stage_3_image={frontmatter.stage_3_image}
        stage_3_image_after={frontmatter.stage_3_image_after}
        stage_4_title={frontmatter.stage_4_title}
        stage_4_image={frontmatter.stage_4_image}
        stage_4_image_after={frontmatter.stage_4_image_after}
        stage_5_title={frontmatter.stage_5_title}
        stage_5_image={frontmatter.stage_5_image}
        stage_5_image_after={frontmatter.stage_5_image_after}
        stage_6_title={frontmatter.stage_6_title}
        stage_6_image={frontmatter.stage_6_image}
        stage_6_image_after={frontmatter.stage_6_image_after}
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
        stage_1_image
        stage_1_image_after
        stage_2_title
        stage_2_image
        stage_2_image_after
        stage_3_title
        stage_3_image
        stage_3_image_after
        stage_4_title
        stage_4_image
        stage_4_image_after
        stage_5_title
        stage_5_image
        stage_5_image_after
        stage_6_title
        stage_6_image
        stage_6_image_after
      }
    }
  }
`
