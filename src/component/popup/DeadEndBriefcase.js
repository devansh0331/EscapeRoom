import React from 'react'

import "./Popup.css"

//Popup IMPORT
// import deMonalisa from "../../img/final/popup/deMonalisa.png"
import CloseBtn from './CloseBtn'
import clueBriefcase from "../../img/final/popup/clueBriefcase.png"

function DeadEndBriefcase() {
  return (
    <div className='popup-container'>
    <img src={clueBriefcase} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default DeadEndBriefcase