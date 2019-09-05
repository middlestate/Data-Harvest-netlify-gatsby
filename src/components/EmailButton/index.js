import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const EmailButton = () => {
  return (
    <div className='email_button'>
      <a href='http://dataharvest.co/#'>
        <FontAwesomeIcon icon={faEnvelope} className='fontawesome_icon' size='2x' />
      </a>
    </div>
  )
}

export default EmailButton
