import React, {Component} from 'react'
import {Link} from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link to={`/blog/${props.url}`} className='button is-rounded'>
        {props.text}
      </Link>
    )
  } else {
    return (
      <span disabled className='button is-rounded'>
        {props.text}
      </span>
    )
  }
}

export default class BlogPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false,
      isTop: true,
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  componentDidMount () {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    const navbar_backgroundColor_beforeScroll = 'transparent'
    const navbar_textColor_beforeScroll = '#ffffff'
    const navbar_logo_beforeScroll = '/img/dataharvest_logo_white.png'
    const border_bottom_beforeScroll = 'none'
    const navbar_height_beforeScroll = '90px'
    const navbar_logo_height_beforeScroll = '90px'
    const navbar_logo_width_beforeScroll = '150px'

    const navbar_backgroundColor_afterScroll = 'white'
    const navbar_textColor_afterScroll = '#444444'
    const navbar_logo_afterScroll = '/img/dataharvest_logo_green.png'
    const border_bottom_afterScroll = '1px solid #000000'
    const navbar_height_afterScroll = '55px'
    const navbar_logo_height_afterScroll = '55px'
    const navbar_logo_width_afterScroll = '90px'

    const footer_background_color = '#606061'

    const {pageContext} = this.props
    const {group, index, first, last} = pageContext /* removed index, first, last variables from object */
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString() + '/'

    const websiteSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    }

    return (
      <Layout>
        <Helmet>
          <title>Blog | Gatsby Starter Business</title>
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>

        <nav className='navbar is-fixed-top'
          style={
            {
              backgroundColor: `${
                this.state.isTop
                  ? navbar_backgroundColor_beforeScroll
                  : navbar_backgroundColor_afterScroll
              }`,
              borderBottom: `${
                this.state.isTop
                  ? border_bottom_beforeScroll
                  : border_bottom_afterScroll
              }`,
            }
          } aria-label='main navigation'>

          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <img src={
                `${
                  this.state.isTop
                    ? navbar_logo_beforeScroll
                    : navbar_logo_afterScroll
                }`
              } style={
                {
                  height: `${
                    this.state.isTop
                      ? navbar_logo_height_beforeScroll
                      : navbar_logo_height_afterScroll
                  }`,
                  width: `${
                    this.state.isTop
                      ? navbar_logo_width_beforeScroll
                      : navbar_logo_width_afterScroll
                  }`,
                }
              } alt='DataHarvest White Logo' />
            </Link>
            <button
              className={`button navbar-burger ${this.state.isActive ? 'is-active' : ''}`}
              data-target='navMenu'
              onClick={this.toggleNavbar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={`navbar-menu ${this.state.isActive ? 'is-active' : ''}`} id='navMenu'>

            <div className='navbar-end'>
              {/* <SearchBox searchIndex={data.siteSearchIndex.index} /> */}
              <Link className='navbar-item' style={
                {
                  color: `${
                    this.state.isTop
                      ? navbar_textColor_beforeScroll
                      : navbar_textColor_afterScroll
                  }`,
                  height: `${
                    this.state.isTop
                      ? navbar_height_beforeScroll
                      : navbar_height_afterScroll
                  }`,
                }
                /* Changed from /project to /blog */
              } to='/blog'>
                Blog
              </Link>
              <Link className='navbar-item' style={
                {
                  color: `${
                    this.state.isTop
                      ? navbar_textColor_beforeScroll
                      : navbar_textColor_afterScroll
                  }`,
                  height: `${
                    this.state.isTop
                      ? navbar_height_beforeScroll
                      : navbar_height_afterScroll
                  }`,
                }
              } to='/about'>
                About
              </Link>
            </div>
          </div>
        </nav>

        <div className='project-page'>
          <section className='project section'>
            <h1>DataHarvest Project</h1>
          </section>
          <section className='lifecycle section'>
            <h1>A connected view of the produce lifecycle at each stage of the product lifecycle</h1>
            <p>DataHarvest’s vision for the future farm is about end-to-end knowledge. Our FirstBlock Ledger is a modular platform for building, deploying, and running distributed ledgers. Distributed ledgers provide a digital record, like asset ownership, that is maintained without a central authority or implementation. This provides unparalleled transparency and security; that provides value to all parties.</p>
            <div className='stages columns'>
              <div className='stage column'>
                <h3>Research</h3>
                <div className='stage_image_container'>
                  <img src='/img/research.png' className='first_image' alt='research' />
                  <img src='/img/research_after.png' className='second_image' alt='research_after' />
                </div>
              </div>
              <div className='stage column'>
                <h3>Nursery</h3>
                <div className='stage_image_container'>
                  <img src='/img/nursery.png' className='first_image' alt='nursery' />
                  <img src='/img/nursery_after.png' className='second_image' alt='nursery_after' />
                </div>
              </div>
              <div className='stage column'>
                <h3>Operations</h3>
                <div className='stage_image_container'>
                  <img src='/img/operations.png' className='first_image' alt='operations' />
                  <img src='/img/operations_after.png' className='second_image' alt='operations_after' />
                </div>
              </div>
              <div className='stage column'>
                <h3>Logistics</h3>
                <div className='stage_image_container'>
                  <img src='/img/logistics.png' className='first_image' alt='logistics' />
                  <img src='/img/logistics_after.png' className='second_image' alt='logistics_after' />
                </div>
              </div>
              <div className='stage column'>
                <h3>Retail</h3>
                <div className='stage_image_container'>
                  <img src='/img/retail.png' className='first_image' alt='retail' />
                  <img src='/img/retail_after.png' className='second_image' alt='retail_after' />
                </div>
              </div>
              <div className='stage column'>
                <h3>Consumer</h3>
                <div className='stage_image_container'>
                  <img src='/img/consumer.png' className='first_image' alt='consumer' />
                  <img src='/img/consumer_after.png' className='second_image' alt='consumer_after' />
                </div>
              </div>
            </div>
          </section>
          <section className='features section'>
            <h1 className='features_title'>Features and technology</h1>
            <h2 className='features_subtitle'>We partner with organizations and build connections with technology to impact each stage of the product lifecycle.</h2>
            {/*
              <div className='tiles-container'>
                <Gallery gridItems={gallery.images} />
              </div>
             */}
            <section className='section'>
              <PostCard posts={group} />
              <section className='section'>
                <div className='buttons is-centered'>
                  <PaginationLink test={first} url={previousUrl} text='Previous Page' />
                  <PaginationLink test={last} url={nextUrl} text='Next Page' />
                </div>
              </section>
            </section>
          </section>
        </div>

        <footer className='footer' style={{backgroundColor: footer_background_color}}>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <p>Blockchain for the food supply chain realized.</p>
              </div>
              <div className='column'>
                <img src='/img/dataharvest_logo_white_large.png' alt='DataHarvest Large Logo' />
              </div>
              <div className='social_media column'>
                <a href='https://www.facebook.com/DataHarvest.co/'>
                  <FontAwesomeIcon icon={faFacebookF} className='fontawesome_icon' size='2x' />
                </a>
                <a href='https://www.linkedin.com/company/dataharvest.co/'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='fontawesome_icon' size='2x' />
                </a>
                <a href='https://twitter.com/dataharvest'>
                  <FontAwesomeIcon icon={faTwitter} className='fontawesome_icon' size='2x' />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Layout>
    )
  }
}
