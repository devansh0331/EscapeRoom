import React from 'react'

import '../Popup.css'
import CloseBtn from '../CloseBtn'

import blankInvestor from "../../../img/final/popup/blankInvestor.png"

function Investor() {
  return (
    <div className='popup-container'>
    <img src={blankInvestor} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default Investor
