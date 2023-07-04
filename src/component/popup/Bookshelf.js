import React from 'react'

import "./Popup.css"

//Popup IMPORT
import Blur from "../../img/final/popup/Blur.png"
import EncycBtn from "../../img/final/btn/EncycBtn.png"
import  IkigaiBtn from "../../img/final/btn/IkigaiBtn.png"
import InvestorBtn from "../../img/final/btn/InvestorBtn.png"
import DictBtn from "../../img/final/btn/DictBtn.png"
import CloseBtn from './CloseBtn'
import { useNavigate } from 'react-router-dom'


function Bookshelf() {
    const navigate = useNavigate()

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    const handleBookClick = (e) =>{
        navigate(`../popup/${capitalizeFirstLetter(e.target.id)}`)


    }
  return (
    <div>
      <div className='popup-container'>
    <img src={Blur} alt='Popup'/>

    <img src={DictBtn} onClick={handleBookClick} alt='Book' id='dictionary'/>
    <img src={InvestorBtn} onClick={handleBookClick} alt='Book' id='investor'/>
    <img src={EncycBtn} onClick={handleBookClick} alt='Book' id='encyclopedia'/>
    <img src={IkigaiBtn} onClick={handleBookClick} alt='Book' id='ikigai'/>
    <CloseBtn/>

    </div>
    </div>
  )
}

export default Bookshelf
