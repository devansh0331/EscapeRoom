import React from 'react'

import "./Popup.css"
import "./css/Mobile.css"

//Popup IMPORT
import blankMobile from "../../img/final/popup/blankMobile.png"
import CloseBtn from './CloseBtn'
import { useNavigate } from 'react-router-dom'

function MobileRiddle() {
    return(
        <div>
        <div className='popup-container'>
        <img src={blankMobile} alt='Popup'/>
        <CloseBtn/>
        </div>
        </div>
    )
}

export default MobileRiddle