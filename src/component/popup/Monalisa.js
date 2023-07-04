import React from 'react'

import "./Popup.css"

//Popup IMPORT
import blankMonalisa from "../../img/final/popup/blankMonalisa.png"
import CloseBtn from './CloseBtn'

function Monalisa() {
  return (
    <div className='popup-container'>
    <img src={blankMonalisa} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default Monalisa
