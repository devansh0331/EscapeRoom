import React , {useState} from 'react'

import "./Popup.css"
import "./css/Briefcase.css"

//Popup IMPORT
import blankBriefcase from "../../img/final/popup/blankBriefcase.png"
import CloseBtn from './CloseBtn'
import { useNavigate } from 'react-router-dom'
function Briefcase() {

  const[password,setPassword] = useState('');
  const[mssg,setMssg] = useState("");
 
  const navigate = useNavigate();
  const onClickHandle =(e) =>{
    if(password === 'KGS79Z'){
      setMssg("Opening...")
      setTimeout(()=>{
        setMssg("");
        navigate('/popup/deb');
      },1000);

    }else{
      
      setMssg("Sorry! The code is wrong")
      setTimeout(()=>{
        setMssg("");
      },1000);
    }
  }

  return (
    <div className='popup-container'>
    <img src={blankBriefcase} alt='Popup'/>
    {/* <input type='number' onChange={(e)=>{setDate(e.target.value.slice(0,2));}} placeholder='Date' value={date} id="dateInput"/> */}
    <input className='inputCode' type='String' onChange={(e)=>{setPassword(e.target.value.slice(0,10).toUpperCase());}} placeholder='Enter the Code' value={password} />
    <div className='btnDivBriefcase'>

    <button className='btnBriefcase' onClick={(e)=>onClickHandle()}>Open</button>
    <p className='mssgBriefcase'> {mssg}</p>
    </div>
    <CloseBtn/>

    </div>
  )
}

export default Briefcase
