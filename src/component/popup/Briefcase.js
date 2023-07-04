import React from 'react'

import "./Popup.css"

//Popup IMPORT
import blankBriefcase from "../../img/final/popup/blankBriefcase.png"
import CloseBtn from './CloseBtn'

function Briefcase() {
  return (
    <div className='popup-container'>
    <img src={blankBriefcase} alt='Popup'/>
    <CloseBtn/>

    </div>
  )
}

export default Briefcase
