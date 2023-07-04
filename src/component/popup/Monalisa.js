import React, { useState } from 'react'

import "./Popup.css"
import "./css/Monalisa.css"

//Popup IMPORT
import blankMonalisa from "../../img/final/popup/blankMonalisa.png"
import CloseBtn from './CloseBtn'
import { useNavigate } from 'react-router-dom'


function Monalisa() {

  const[year,setYear] = useState(0);
  const[mssg,setMssg] = useState("");
 
  const navigate = useNavigate();
  const onClickHandle =(e) =>{
    if(year == 1452){
      navigate('/popup/dem');

    }else{
      setYear(0);
      setMssg("Oops! That's not the right answer.")
      setTimeout(()=>{
        setMssg("");
      },1000);
    }
  }
  
  return (
    <div className='popup-container'>
    <img src={blankMonalisa} alt='Popup'/>
    <input className='input' type='number' onChange={(e)=>{setYear(e.target.value)}} value={year}/>
    <button className='btn' onClick={(e)=>onClickHandle()}>Submit</button>
    <p className='mssg'>{mssg}</p>
    <CloseBtn/>
    
    </div>
  )
}

export default Monalisa
