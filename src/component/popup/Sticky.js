import React from 'react'

import "./Popup.css"
// import CloseIcon from '@material-ui/icons/Close';
//Popup IMPORT
import blankSticky from "../../img/final/popup/blankSticky.png"
import CloseBtn from './CloseBtn'


function Sticky() {
  return (
    <div className='popup-container'>
    <img src={blankSticky} alt='Popup'/>
    <CloseBtn/>
    </div>
  )
}

export default Sticky
