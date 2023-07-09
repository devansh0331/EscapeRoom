import React , {useContext, useState} from 'react'


import "./Popup.css"
import "./css/Calender.css"

//Popup IMPORT
import blankCalender from "../../img/final/popup/blankCalender.png"
import CloseBtn from './CloseBtn'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "./../../context/AuthContext";
// import { useAuth } from '../../../context/AuthContext'





function Calender() {

  const { valCount, count } = useAuth();
  
  
  const[date,setDate] = useState();
  const[month,setMonth] = useState('');
  const[mssg,setMssg] = useState("");
  
  // const count = useContext(useAuth)
  // const {incrCount} = useAuth()

  const navigate = useNavigate();
  const onClickHandle = async (e) =>{
    if((date == 23) && (month === 'SEPTEMBER')){
      setMssg("Congratulations! You are Right.")
      if (count == 0 || count == 1 ) {await valCount();  }
      setTimeout(()=>{
        setMssg("");
        // incrCount()
        navigate('/popup/dec');
        
      },1000);

    }else{
      setDate(0);
      setMssg("Oops! That's not the right answer.")
      setTimeout(()=>{
        setMssg("");
      },1000);
    }
  }

  return (
    <div className='popup-container'>
    <img src={blankCalender} alt='Popup'/>

    <div className='inpsCalender'>

    <input type='number' onChange={(e)=>{setDate(e.target.value.slice(0,2));}} placeholder='Date' value={date} id="dateInput"/>
    <input type='String' onChange={(e)=>{setMonth(e.target.value.slice(0,10).toUpperCase());}} placeholder='Month' value={month} id="monthInput"/>
    </div>
    <button className='btn' onClick={(e)=>onClickHandle()}>Submit</button>
    <p className='mssg'>{mssg}</p>
    <CloseBtn/>

    </div>
  )
}

export default Calender
