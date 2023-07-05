import React from 'react'

import "./Popup.css"
import CloseBtn from './CloseBtn'
import deLaptop from "../../img/final/popup/deLaptop.png"

function DeadEndLaptop() {
  return (
    <div>
      <div className='popup-container'>
    <img src={deLaptop} alt='Popup'/>
    <CloseBtn/>
    </div>
    </div>
  )
}

export default DeadEndLaptop
