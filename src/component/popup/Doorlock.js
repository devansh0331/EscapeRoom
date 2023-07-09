import React , {useState} from 'react'
import "./Popup.css"
import './css/DoorLock.css'
//Popup IMPORT
import blankDoorLock from "../../img/final/popup/blankDoorLock.png"
import CloseBtn from './CloseBtn'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "./../../context/AuthContext"



function Doorlock() {

  const navigate = useNavigate()
  const { count } = useAuth()
  const [inp1, setinp1] = useState()
  const [inp2, setinp2] = useState()
  const [inp3, setinp3] = useState()
  const [inp4, setinp4] = useState()
  const [inp5, setinp5] = useState()
  const [inp6, setinp6] = useState()

  const[mssg,setMssg] = useState("");
 
  const handleOnSubmit = (e) => {
      // e.preventDefault()

      if((inp1 == 3) && (inp2 == 4) && (inp3 == 9) && (inp4 == 8) && (inp5 == 6) && (inp6 == 2)){
        if (count == 1 || count == 2 ) {
        setMssg('Yeah! You have cleared this round');
        setTimeout(() => {
          setMssg('')
          navigate('../popup/win')
        }, 2000);
        }
        else {
          alert("You have some unfinished clues!! Complete and get back here !!")
        }
      }

      else{
        setMssg('Wrong Input! Try again');
        setTimeout(() => {
          setMssg('')
        }, 2000);
      }
  }
  return (
    <div className='popup-container'>
    <img src={blankDoorLock} alt='Popup'/>
    <CloseBtn/>

    <span>Enter the code to UNLOCK the Door</span>
    <div className='inps'>
      <input type='number' onChange={(e)=>{setinp1(e.target.value.slice(0,1));}} placeholder='' value={inp1} id='in1' onKeyUp={(e)=>{document.getElementById('in2').focus()}}/>
      <input type='number' onChange={(e)=>{setinp2(e.target.value.slice(0,1));}} placeholder='' value={inp2} id='in2' onKeyUp={(e)=>{document.getElementById('in3').focus()}}/>  
      <input type='number' onChange={(e)=>{setinp3(e.target.value.slice(0,1));}} placeholder='' value={inp3} id='in3' onKeyUp={(e)=>{document.getElementById('in4').focus()}}/>
      <input type='number' onChange={(e)=>{setinp4(e.target.value.slice(0,1));}} placeholder='' value={inp4} id='in4' onKeyUp={(e)=>{document.getElementById('in5').focus()}}/>
      <input type='number' onChange={(e)=>{setinp5(e.target.value.slice(0,1));}} placeholder='' value={inp5} id='in5' onKeyUp={(e)=>{document.getElementById('in6').focus()}}/>
      <input type='number' onChange={(e)=>{setinp6(e.target.value.slice(0,1));}} placeholder='' value={inp6} id='in6'/>
      
    </div>
    {/* <div className='inps2'>
      <input onChange={(e) => {setdoorlockInp(e.target.value)}} value={doorlockInp}/>
      
    </div> */}
    <div className='open-btn'>
      <button onClick={handleOnSubmit}>Open</button>
      <p className='mssg'>{mssg}</p>
    </div>
    </div>
  )
}

export default Doorlock
