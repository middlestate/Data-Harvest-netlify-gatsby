import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import '../../assets/sass/styles.sass'
import config from '../../../config'
import EmailButton from '../../components/EmailButton/index'
import ScrollUpButton from '../../components/ScrollUpButton/index'

class Layout extends Component {
  render () {
    return (
      <Fragment>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
        <Fragment>{this.props.children}</Fragment>
        <EmailButton />
        <ScrollUpButton />
      </Fragment>
    )
  }
}

export default Layout
