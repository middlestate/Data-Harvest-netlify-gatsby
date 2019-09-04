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
    const navbar_backgroundColor = this.props.navbar_backgroundColor
    const navbar_textColor = this.props.navbar_textColor
    const navbar_logo = this.props.navbar_logo
    return (
      <nav className='navbar is-fixed-top' style={{backgroundColor: navbar_backgroundColor}} aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src={navbar_logo} alt='DataHarvest White Logo' />
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
            <Link className='navbar-item' style={{color: navbar_textColor}} to='/project'>
                            Project
            </Link>
            <Link className='navbar-item' style={{color: navbar_textColor}} to='/about'>
                            About
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar
