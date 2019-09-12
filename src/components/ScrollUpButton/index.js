import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const ScrollUpButton = () => {
  return (
    <div className='scroll_up_button'>
      <a href='#'>
        <FontAwesomeIcon icon={faAngleUp} className='fontawesome_icon' size='2x' />
      </a>
    </div>
  )
}

export default ScrollUpButton
