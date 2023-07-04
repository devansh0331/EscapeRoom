import React from 'react'

import "./Popup.css"

//Popup IMPORT
import blankLaptop from "../../img/final/popup/blankLaptop.png"
import CloseBtn from './CloseBtn'
function Laptop() {
  return (
    <div className='popup-container'>
    <img src={blankLaptop} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default Laptop
