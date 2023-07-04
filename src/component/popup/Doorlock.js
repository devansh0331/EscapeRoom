import React , {useState} from 'react'

import "./Popup.css"
import './css/DoorLock.css'
//Popup IMPORT
import blankDoorLock from "../../img/final/popup/blankDoorLock.png"
import CloseBtn from './CloseBtn'

function Doorlock() {

  const [doorlockInp, setdoorlockInp] = useState('')

  const handleOnSubmit = (e) => {
      // e.preventDefault()
      if(doorlockInp === "456123"){
        console.log('Yeah! You have cleared this round');
      }

      else{
        console.log('Wrong Input! Try again');
      }
  }
  return (
    <div className='popup-container'>
    <img src={blankDoorLock} alt='Popup'/>
    <CloseBtn/>

    <span>Enter the code to UNLOCK the Door</span>
    <div className='inps'>
      <input/>
      <input/>
      <input/>
      <input/>
      <input/>
      <input/>
    </div>
    <div className='inps2'>
      <input onChange={(e) => {setdoorlockInp(e.target.value)}} value={doorlockInp}/>
      
    </div>
    <div className='open-btn'>
      <button onClick={handleOnSubmit}>Open</button>
    </div>
    </div>
  )
}

export default Doorlock
