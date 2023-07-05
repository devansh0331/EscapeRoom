import React from 'react'

import "./Popup.css"
import CloseBtn from './CloseBtn'
import deMobile from '../../img/final/popup/deMobile.png'

function DeadEndMobile() {
  return (
    <div>
      <div className='popup-container'>
    <img src={deMobile} alt='Popup'/>
    <CloseBtn/>
    </div>
    </div>
  )
}

export default DeadEndMobile