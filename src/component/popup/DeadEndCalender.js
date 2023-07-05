import React from 'react'

import "./Popup.css"

//Popup IMPORT
// import deMonalisa from "../../img/final/popup/deMonalisa.png"
import CloseBtn from './CloseBtn'
import deCalender from "../../img/final/popup/deCalender.png"

function DeadEndCalender() {
  return (
    <div className='popup-container'>
    <img src={deCalender} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default DeadEndCalender