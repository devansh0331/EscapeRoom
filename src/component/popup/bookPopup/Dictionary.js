import React from 'react'

import '../Popup.css'
import CloseBtn from '../CloseBtn'

import blankDict from "../../../img/final/popup/blankDict.png"

function Dictionary() {
  return (
    <div className='popup-container'>
    <img src={blankDict} alt='Popup' />
    <CloseBtn/>
    </div>
  )
}

export default Dictionary
