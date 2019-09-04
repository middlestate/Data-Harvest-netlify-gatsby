import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import '../../assets/sass/styles.sass'
import config from '../../../config'

class Layout extends Component {
  render () {
    return (
      <Fragment>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
        <Fragment>{this.props.children}</Fragment>
      </Fragment>
    )
  }
}

export default Layout
