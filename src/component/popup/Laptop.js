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
    if(password === 'C0G07BH'){
      setMssg("Opening...")
      setTimeout(()=>{
        setMssg("");
        navigate('/popup/del');
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
    <div className='inpsLaptop'>

    {/* <input type='number' onChange={(e)=>{setDate(e.target.value.slice(0,2));}} placeholder='Date' value={date} id="dateInput"/> */}
    <input type='String' onChange={(e)=>{setPassword(e.target.value.slice(0,10));}} placeholder='password' value={password} id="monthInput"/>
    </div>
    <div className='btnDiv'>

    <button className='btnLaptop' onClick={(e)=>onClickHandle()}>Open</button>
    <p className='mssg'> {mssg}</p>
    </div>
    <CloseBtn/>
    </div>
  )
}

export default Laptop
