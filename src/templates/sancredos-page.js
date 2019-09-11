import React from 'react'
import PropTypes from 'prop-types'
import SanCredosPage from '../components/SanCredosPage'
import Layout from '../components/Layout'
import Footer from '../components/Footer/index'
import NavBar from '../components/NavBar/index'

const SanCredosPageTemplate = ({data}) => {
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
      <SanCredosPage
        project_title={frontmatter.project_title}
        project_description_p1={frontmatter.project_description_p1}
        project_description_p2={frontmatter.project_description_p2}
        project_description_p3={frontmatter.project_description_p3}
      />    
    </Layout>

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
        project_title
        project_description_p1
        project_description_p2
        project_description_p3
      }
    }
  }
`
