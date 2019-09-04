import React from 'react'
// import {Link, graphql, StaticQuery} from 'gatsby'
import {Link} from 'gatsby'
// import SearchBox from '../SearchBox'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false,
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    // const navbar_backgroundColor = this.props.navbar_backgroundColor
    // const navbar_textColor = this.props.navbar_textColor
    // const navbar_logo = this.props.navbar_logo
    // const border_bottom = this.props.border_bottom
    // const navbar_height = this.props.navbar_height
    // const navbar_logo_height = this.props.navbar_logo_height

    const navbar_backgroundColor_afterScroll = this.props.navbar_backgroundColor_afterScroll
    const navbar_textColor_afterScroll = this.props.navbar_textColor_afterScroll
    const navbar_logo_afterScroll = this.props.navbar_logo_afterScroll
    const border_bottom_afterScroll = this.props.border_bottom_afterScroll
    const navbar_height_afterScroll = this.props.navbar_height_afterScroll
    const navbar_logo_height_afterScroll = this.props.navbar_logo_height_afterScroll
    return (
      <nav className='navbar is-fixed-top' style={{backgroundColor: navbar_backgroundColor_afterScroll, borderBottom: border_bottom_afterScroll}} aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src={navbar_logo_afterScroll} style={{height: navbar_logo_height_afterScroll}} alt='DataHarvest White Logo' />
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
            <Link className='navbar-item' style={{color: navbar_textColor_afterScroll, height: navbar_height_afterScroll}} to='/project'>
                            Project
            </Link>
            <Link className='navbar-item' style={{color: navbar_textColor_afterScroll, height: navbar_height_afterScroll}} to='/about'>
                            About
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar
