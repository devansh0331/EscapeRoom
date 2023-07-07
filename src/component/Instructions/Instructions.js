import React from 'react'
import { useNavigate } from "react-router-dom";


// import {auth , provider} from "../auth/config"
// import {signInWithPopup} from "firebase/auth"

import './Instruction.css'
import paper2 from '../../img/paper2.png'

const Instructions = () => {
  const navigate = useNavigate()

  return (
    <div className='instruction'>
          <img src={paper2} className='paper'/>
          <main className='text-wrapper'>
          <h2 className='title'>ESCAPE ROOM</h2>
          <p className='subtitle'>Escape the room using the hidden clues</p>
          <p className='subtitle s2'><b>Note:</b> Only limited participants will be entering the next level ☠ </p>
          <button onClick={()=>{navigate('./coundown')}} className='btnStart'>Start</button>
          <p className='subtitle s3'>(You can google the riddles if required)</p> 
          </main>
    </div>
  )
}

export default Instructions