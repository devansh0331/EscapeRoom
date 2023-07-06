import React , {useState} from 'react'

import "./Popup.css"
import "./css/Mobile.css"

//Popup IMPORT
import blankMobile from "../../img/final/popup/blankMobile.png"
import CloseBtn from './CloseBtn'
import { useNavigate } from 'react-router-dom'

function MobileRiddle() {

    const [hrsInput, sethrsInput] = useState()
    const [minInput, setminInput] = useState()

    const[mssg,setMssg] = useState("");
    
    const navigate = useNavigate()

    const handleMR = () => {
        // e.preventDefault()
        if((hrsInput == 10) && (minInput == 15)){
          setMssg("It's Correct");
          setTimeout(() => {
            setMssg('')
            navigate('../popup/demo')
          }, 2000);
        }
  
        else{
          setMssg('Wrong Input! Try again');
          setTimeout(() => {
            setMssg('')
          }, 2000);
        }
    }

    return(
        <div>
        <div className='popup-container'>
        <img src={blankMobile} alt='Popup'/>
        <div>
            <span>Set the Correct Time</span>
            <div className='inpsMobile'>
            <input type='number' onChange={(e)=>{sethrsInput(e.target.value.slice(0,10));}} className='mrInput' placeholder='hrs' value={hrsInput} id="hrsInput"/>  
            <input type='number' onChange={(e)=>{setminInput(e.target.value.slice(0,10));}} className='mrInput' placeholder='min' value={minInput} id="minInput"/>
            <button onClick={handleMR} className='mrBtn'>Save</button>
            <p className='mrMssg'>{mssg}</p>
            </div>
        </div>
        <CloseBtn/>
        </div>
        </div>
    )
}

export default MobileRiddle