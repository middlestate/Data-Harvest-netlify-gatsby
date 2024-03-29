import React from 'react'
import PropTypes from 'prop-types'
import AvipPage from '../components/AvipPage'
import Layout from '../components/Layout'
import Footer from '../components/Footer/index'
import NavBar from '../components/NavBar/index'

const AvipPageTemplate = ({data}) => {
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
      <AvipPage
        project_background_image={frontmatter.project_background_image}
        project_title={frontmatter.project_title}
        project_description_p1={frontmatter.project_description_p1}
        project_description_p2={frontmatter.project_description_p2}
        project_description_p3={frontmatter.project_description_p3}
      />
      <Footer footer_background_color={frontmatter.footer_background_color} />
    </Layout>

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
        footer_background_color
        project_background_image
        project_title
        project_description_p1
        project_description_p2
        project_description_p3
      }
    }
  }
`
