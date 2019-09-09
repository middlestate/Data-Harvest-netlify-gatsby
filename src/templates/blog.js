import React, {Component} from 'react'
import {Link} from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'

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
  render () {
    const {pageContext} = this.props
    const {group, index, first, last} = pageContext
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
          </section>
        </div>

        <section className='section'>
          <PostCard posts={group} />
          <section className='section'>
            <div className='buttons is-centered'>
              <PaginationLink test={first} url={previousUrl} text='Previous Page' />
              <PaginationLink test={last} url={nextUrl} text='Next Page' />
            </div>
          </section>
        </section>

      </Layout>
    )
  }
}
