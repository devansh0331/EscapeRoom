import React from 'react'

import '../Popup.css'
import CloseBtn from '../CloseBtn'

import blankEncyc from "../../../img/final/popup/blankEncyc.png"

function Encyclopedia() {
  return (
    <div className='popup-container'>
    <img src={blankEncyc} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default Encyclopedia
