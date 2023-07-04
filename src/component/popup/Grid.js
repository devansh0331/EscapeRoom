import React from 'react'

import "./Popup.css"

//Popup IMPORT
import blankGrid from "../../img/final/popup/blankGrid.png"
import CloseBtn from './CloseBtn'

function Grid() {
  return (
    <div className='popup-container'>
    <img src={blankGrid} alt='Popup'/>
    <CloseBtn/>

    </div>
  )
}

export default Grid
