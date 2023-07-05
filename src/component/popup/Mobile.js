import React , {useState} from 'react'

import "./Popup.css"
import "./css/Laptop.css"

//Popup IMPORT
import blankMobile from "../../img/final/popup/blankMobile.png"
import CloseBtn from './CloseBtn'
import { useNavigate } from 'react-router-dom'

function Mobile() {


  
  const[password,setPassword] = useState('');
  const[mssg,setMssg] = useState("");
 
  const navigate = useNavigate();
  const onClickHandle =(e) =>{
    if(password === 'WI5T1718'){
      setMssg("Opening...")
      setTimeout(()=>{
        setMssg("");
        navigate('/popup/del');
      },1000);

    }else{
      
      setMssg("Wrong Password")
      setTimeout(()=>{
        setMssg("");
      },1000);
    }
  }


  return (
    <div className='popup-container'>
    <img src={blankMobile} alt='Popup'/>

    <div className='inpsLaptop'>

    {/* <input type='number' onChange={(e)=>{setDate(e.target.value.slice(0,2));}} placeholder='Date' value={date} id="dateInput"/> */}
    <input type='String' onChange={(e)=>{setPassword(e.target.value.slice(0,10));}} placeholder='password' value={password} id="monthInput"/>
    </div>
    <div className='btnDiv'>
    <button className='btnLaptop' onClick={(e)=>onClickHandle()}>Open</button>
    <p className='mssg'>{mssg}</p>

    </div>
    <CloseBtn/>
    </div>
  )
}

export default Mobile
