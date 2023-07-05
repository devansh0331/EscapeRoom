import React , {useState} from 'react'

import "./Popup.css"
import "./css/Laptop.css"

//Popup IMPORT
import blankLaptop from "../../img/final/popup/blankLaptop.png"
import CloseBtn from './CloseBtn'
import { useNavigate } from 'react-router-dom'
function Laptop() {


  
  const[password,setPassword] = useState('');
  const[mssg,setMssg] = useState("");
 
  const navigate = useNavigate();
  const onClickHandle =(e) =>{
    if(password === 'COG07BH'){
      setMssg("Opening...")
      setTimeout(()=>{
        setMssg("");
        navigate('/popup/lr');
      },1000);

    }else{
      
      setMssg("Wrong Password...")
      setTimeout(()=>{
        setMssg("");
      },1000);
    }
  }


  return (
    <div className='popup-container'>
    <img src={blankLaptop} alt='Popup'/>
    <input className='inputLaptop' type='String' onChange={(e)=>{setPassword(e.target.value.slice(0,10).toUpperCase());}} placeholder='ENTER PASSWORD' value={password} />
    <button className='btnLaptop' onClick={(e)=>onClickHandle()}>Open</button>
    <p className='mssgLaptop'> {mssg}</p> 
    <CloseBtn/>
    </div>
  )
}

export default Laptop
