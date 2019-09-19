import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
// import dataharvest_hero from '../../assets/img/dataharvest-pah.mp4'

/* New branch - fully-responsive */

const HomePageTemplate = ({
  header_title_image,
  subheading_part1,
  subheading_part2,
  avocado_heading,
  avocado_subheading,
  avocado_description,
  avocado_image,
  intel_image,
  hyperledger_image,
  IBM_image,
  linux_image,
  spotlight_image,
  spotlight_heading,
  spotlight_subheading,
  spotlight_description,
}) => (
  <div>
    <section className='hero section'>
      <div className='hero-video' style={{bottom: 'inherit'}}>
        <div className='is-hidden-mobile'>
          {/** <div className='overlay' />  */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,.5)',
            zIndex: 1,
          }}
          />
          <video playsInline autoPlay muted loop poster='' style={{zIndex: -100}}>
            <source src='https://github.com/middlestate/Data-Harvest-netlify-gatsby/blob/54b1d7b81e828f023127874b7890e0b478ad1c62/src/assets/img/dataharvest-pah.mp4?raw=true' type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <img src={header_title_image} className='header_title_image' alt='header_title_image' />
            <p className='subheading_part1'>
              {subheading_part1}
              <strong className='subheading_part2'>{' ' + subheading_part2}</strong>
            </p>
          </div>
          <div className='column' />
        </div>
      </div>
    </section>
    <section className='hero-block hero-footer section' />
    <section className='avocado section'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <h1>{avocado_heading}</h1>
            <h2>{avocado_subheading}</h2>
            <p>{avocado_description}</p>
            <Link to='/project'>
              <button>DataHarvest Project</button>
            </Link>
          </div>
          <div className='column'>
            <img src={avocado_image} alt='avocado' />
          </div>
        </div>
      </div>
    </section>
    <section className='affiliates section'>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column has-text-centered'>
            <img src={intel_image} alt='intel' />
          </div>
          <div className='column has-text-centered'>
            <img src={hyperledger_image} alt='hyperledger' />
          </div>
          <div className='column has-text-centered'>
            <img src={IBM_image} alt='IBM' />
          </div>
          <div className='column has-text-centered'>
            <img src={linux_image} alt='linux' />
          </div>
        </div>
      </div>
    </section>
    <section className='spotlight section'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <img src={spotlight_image} className='spotlight_image' alt='avocado' />
          </div>
          <div className='column'>
            <h1>{spotlight_heading}</h1>
            <h2>{spotlight_subheading}</h2>
            <p>{spotlight_description}</p>
            <a href='https://mdst.typeform.com/to/SENQ20'>
              <button>Talk to Us!</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  avocado_heading: PropTypes.string,
}

export default HomePageTemplate
