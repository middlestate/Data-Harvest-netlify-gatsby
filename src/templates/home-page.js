import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'
import Footer from '../components/Footer/index'
import NavBar from '../components/NavBar/index'

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <NavBar
        navbar_backgroundColor={frontmatter.navbar_backgroundColor}
        navbar_textColor={frontmatter.navbar_textColor}
        navbar_logo={frontmatter.navbar_logo}
        border_bottom={frontmatter.border_bottom}
        navbar_height={frontmatter.navbar_height}
        navbar_logo_height={frontmatter.navbar_logo_height}
        navbar_backgroundColor_afterScroll={frontmatter.navbar_backgroundColor_afterScroll}
        navbar_textColor_afterScroll={frontmatter.navbar_textColor_afterScroll}
        navbar_logo_afterScroll={frontmatter.navbar_logo_afterScroll}
        border_bottom_afterScroll={frontmatter.border_bottom_afterScroll}
        navbar_height_afterScroll={frontmatter.navbar_height_afterScroll}
        navbar_logo_height_afterScroll={frontmatter.navbar_logo_height_afterScroll}
      />
      <HomePageTemplate
        header_title_image={frontmatter.header_title_image}
        subheading_part1={frontmatter.subheading_part1}
        subheading_part2={frontmatter.subheading_part2}
        avocado_heading={frontmatter.avocado_heading}
        avocado_subheading={frontmatter.avocado_subheading}
        avocado_description={frontmatter.avocado_description}
        avocado_image={frontmatter.avocado_image}
        intel_image={frontmatter.intel_image}
        hyperledger_image={frontmatter.hyperledger_image}
        IBM_image={frontmatter.IBM_image}
        linux_image={frontmatter.linux_image}
        spotlight_image={frontmatter.spotlight_image}
        spotlight_heading={frontmatter.spotlight_heading}
        spotlight_subheading={frontmatter.spotlight_subheading}
        spotlight_description={frontmatter.spotlight_description}
      />
      <Footer footer_background_color={frontmatter.footer_background_color} />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        navbar_backgroundColor
        navbar_textColor
        navbar_logo
        border_bottom
        navbar_height
        navbar_logo_height
        navbar_backgroundColor_afterScroll
        navbar_textColor_afterScroll
        navbar_logo_afterScroll
        border_bottom_afterScroll
        navbar_height_afterScroll
        navbar_logo_height_afterScroll
        header_title_image
        subheading_part1
        subheading_part2
        avocado_heading
        avocado_subheading
        avocado_description
        avocado_image
        intel_image
        hyperledger_image
        IBM_image
        linux_image
        spotlight_image
        spotlight_heading
        spotlight_subheading
        spotlight_description
        footer_background_color
      }
    }
  }
`
