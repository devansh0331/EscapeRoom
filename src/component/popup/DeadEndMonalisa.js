import React from 'react'

import "./Popup.css"

//Popup IMPORT
// import deMonalisa from "../../img/final/popup/deMonalisa.png"
import CloseBtn from './CloseBtn'
import deMonalisa from "../../img/final/popup/deMonalisa.png"

function DeadEndMonalisa() {
  return (
    <div className='popup-container'>
    <img src={deMonalisa} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default DeadEndMonalisa