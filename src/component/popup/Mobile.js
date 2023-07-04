import React from 'react'

import "./Popup.css"

//Popup IMPORT
import blankMobile from "../../img/final/popup/blankMobile.png"
import CloseBtn from './CloseBtn'

function Mobile() {
  return (
    <div className='popup-container'>
    <img src={blankMobile} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default Mobile
