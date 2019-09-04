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
    return (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src='/img/dataharvest_logo_white.png' alt='DataHarvest White Logo' />
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
            <Link className='navbar-item' to='/project'>
                            Project
            </Link>
            <Link className='navbar-item' to='/about'>
                            About
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar
