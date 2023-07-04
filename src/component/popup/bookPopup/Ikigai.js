import React from 'react'

import '../Popup.css'
import CloseBtn from '../CloseBtn'

import blankIkigai from "../../../img/final/popup/blankIkigai.png"

function Ikigai() {
  return (
    <div className='popup-container'>
    <img src={blankIkigai} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default Ikigai
