import React from 'react'

import "./Popup.css"

//Popup IMPORT
import blankClock from "../../img/final/popup/blankClock.png"
import CloseBtn from './CloseBtn'

function Clock() {
  return (
    <div className='popup-container'>
    <img src={blankClock} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default Clock
