import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import dataharvest_hero from '../../assets/img/dataharvest_hero.mp4'

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
      <div className='hero-video'>
        <div className='is-hidden-mobile'>
          <div className='overlay' />
          <video playsInline autoPlay muted loop poster=''>
            <source src={dataharvest_hero} type='video/mp4' />
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
    <section className='hero-block section' />
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
