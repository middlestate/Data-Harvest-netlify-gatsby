import React from 'react'
// import config from '../../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = ({
  footer_background_color,
}) => {
  return (
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
  )
}

export default Footer
