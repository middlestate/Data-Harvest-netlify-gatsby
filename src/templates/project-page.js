import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import ProjectPageTemplate from '../components/ProjectPageTemplate'
import Layout from '../components/Layout'
import Footer from '../components/Footer/index'
import NavBar from '../components/NavBar/index'

const ProjectPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <Layout>
      <NavBar
        navbar_backgroundColor_beforeScroll={frontmatter.navbar_backgroundColor_beforeScroll}
        navbar_textColor_beforeScroll={frontmatter.navbar_textColor_beforeScroll}
        navbar_logo_beforeScroll={frontmatter.navbar_logo_beforeScroll}
        border_bottom_beforeScroll={frontmatter.border_bottom_beforeScroll}
        navbar_height_beforeScroll={frontmatter.navbar_height_beforeScroll}
        navbar_logo_height_beforeScroll={frontmatter.navbar_logo_height_beforeScroll}
        navbar_logo_width_beforeScroll={frontmatter.navbar_logo_width_beforeScroll}
        navbar_backgroundColor_afterScroll={frontmatter.navbar_backgroundColor_afterScroll}
        navbar_textColor_afterScroll={frontmatter.navbar_textColor_afterScroll}
        navbar_logo_afterScroll={frontmatter.navbar_logo_afterScroll}
        border_bottom_afterScroll={frontmatter.border_bottom_afterScroll}
        navbar_height_afterScroll={frontmatter.navbar_height_afterScroll}
        navbar_logo_height_afterScroll={frontmatter.navbar_logo_height_afterScroll}
        navbar_logo_width_afterScroll={frontmatter.navbar_logo_width_afterScroll}
      />
      <ProjectPageTemplate
        dataharvest_title={frontmatter.dataharvest_title}
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
        features_title={frontmatter.features_title}
        features_subtitle={frontmatter.features_subtitle}
        gallery={frontmatter.gallery}
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
        navbar_backgroundColor_beforeScroll
        navbar_textColor_beforeScroll
        navbar_logo_beforeScroll
        border_bottom_beforeScroll
        navbar_height_beforeScroll
        navbar_logo_height_beforeScroll
        navbar_logo_width_beforeScroll
        navbar_backgroundColor_afterScroll
        navbar_textColor_afterScroll
        navbar_logo_afterScroll
        border_bottom_afterScroll
        navbar_height_afterScroll
        navbar_logo_height_afterScroll
        navbar_logo_width_afterScroll
        dataharvest_title
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
        features_title
        features_subtitle
        gallery {
          images {
            image
            project_title
            url
          }
        }
      }
    }
  }
`
