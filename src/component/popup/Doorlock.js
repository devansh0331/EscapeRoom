import React from 'react'

import "./Popup.css"

//Popup IMPORT
import blankDoorLock from "../../img/final/popup/blankDoorLock.png"
import CloseBtn from './CloseBtn'

function Doorlock() {
  return (
    <div className='popup-container'>
    <img src={blankDoorLock} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default Doorlock
