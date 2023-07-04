import React from 'react'

import "./Popup.css"

//Popup IMPORT
import blankCalender from "../../img/final/popup/blankCalender.png"
import CloseBtn from './CloseBtn'

function Calender() {
  return (
    <div className='popup-container'>
    <img src={blankCalender} alt='Popup'/>
    <CloseBtn/>

    </div>
  )
}

export default Calender
