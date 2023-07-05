import React , {useState} from 'react'

import "./Popup.css"
import "./css/Mobile.css"

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
        navigate('/popup/mr');
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
    <div className='mobileDiv'>
    <input type='String' className='mobileInput' onChange={(e)=>{setPassword(e.target.value.slice(0,10).toUpperCase());}} placeholder='PASSWORD' value={password} />
    <button className='btnMobile' onClick={(e)=>onClickHandle()}>Open</button>
    <p className='mssg'>{mssg}</p>
    </div>
    <CloseBtn/>
    </div>
  )
}

export default Mobile
