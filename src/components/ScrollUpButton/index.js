import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ScrollUpButton = () => {
  return (
    <div className='email_button'>
      <a href='http://dataharvest.co/#'>
        <FontAwesomeIcon icon={faArrowUp} className='fontawesome_icon' size='2x' />
      </a>
    </div>
  )
}

export default ScrollUpButton
