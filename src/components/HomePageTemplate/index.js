import React from 'react'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  heading,
  subheading_part1,
  subheading_part2,
  avocado_heading,
  avocado_subheading,
  avocado_description,
  avocado_image,
}) => (
  <div>
    <section className='hero section'>
      <div className='container'>
        <h1 className='title'>{heading}</h1>
        <p className='subheading_part1'>
          {subheading_part1}
          <span className='subheading_part2'>{' ' + subheading_part2}</span>
        </p>
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
            <button>DataHarvest Project</button>
          </div>
          <div className='column'>
            <img src={avocado_image} alt='avocado' />
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  heading: PropTypes.string,
}

export default HomePageTemplate
